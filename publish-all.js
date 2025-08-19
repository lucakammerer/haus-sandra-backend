// Script to publish all draft documents to production
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'ds9773mo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function publishAllDrafts() {
  console.log('Fetching all draft documents...')
  
  // Fetch all drafts
  const drafts = await client.fetch(`*[_id in path("drafts.**")]`)
  
  if (drafts.length === 0) {
    console.log('No drafts found!')
    return
  }
  
  console.log(`Found ${drafts.length} drafts`)
  
  for (const draft of drafts) {
    const id = draft._id.replace('drafts.', '')
    const document = { ...draft, _id: id }
    delete document._rev
    
    try {
      await client.createOrReplace(document)
      console.log(`✅ Published: ${document._type} - ${document.title || document.name || id}`)
    } catch (error) {
      console.error(`❌ Failed to publish ${id}:`, error.message)
    }
  }
  
  console.log('Done!')
}

publishAllDrafts().catch(console.error)