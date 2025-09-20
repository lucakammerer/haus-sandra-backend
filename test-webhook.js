const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ds9773mo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function testWebhook() {
  try {
    console.log('Making a small update to trigger webhook...')
    
    // Get the current home page
    const homePage = await client.fetch('*[_type == "homePage"][0]')
    console.log('Current home page ID:', homePage?._id)
    console.log('Current home page headline:', homePage?.hero?.headline)
    
    if (!homePage) {
      throw new Error('No homePage document found')
    }
    
    // Make a small update that shouldn't affect the display
    const timestamp = new Date().toISOString()
    await client
      .patch(homePage._id)
      .set({ 
        lastWebhookTest: timestamp
      })
      .commit()
    
    console.log('✅ Updated homePage with webhook test timestamp:', timestamp)
    console.log('🔄 This should have triggered the webhook to call:', 'https://web.haus-sandra-ulm.de/api/revalidate')
    console.log('📝 Check your Vercel function logs to see if the webhook was received')
    
    // Wait a moment and then remove the test field
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    await client
      .patch(homePage._id)
      .unset(['lastWebhookTest'])
      .commit()
      
    console.log('🧹 Cleaned up test field from homePage')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

testWebhook()