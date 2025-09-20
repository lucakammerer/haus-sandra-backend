const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ds9773mo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN, // Get from: npx sanity debug --secrets
  useCdn: false
})

async function createWebhook() {
  try {
    // First, let's list existing webhooks
    console.log('Checking existing webhooks...')
    const existingWebhooks = await client.request({
      method: 'GET',
      uri: '/hooks'
    })
    
    console.log('Existing webhooks:', JSON.stringify(existingWebhooks, null, 2))
    
    // Check if our webhook already exists
    const existingWebhook = existingWebhooks.find(hook => 
      hook.url === 'https://web.haus-sandra-ulm.de/api/revalidate'
    )
    
    if (existingWebhook) {
      console.log('Webhook already exists:', existingWebhook.id)
      console.log('Webhook details:')
      console.log('- Name:', existingWebhook.name)
      console.log('- URL:', existingWebhook.url)
      console.log('- Dataset:', existingWebhook.dataset)
      console.log('- Disabled:', existingWebhook.isDisabled)
      console.log('- Created:', existingWebhook.createdAt)
      
      // Test the webhook by triggering it manually
      console.log('\nTesting webhook manually...')
      try {
        const testResponse = await client.request({
          method: 'POST',
          uri: `/hooks/${existingWebhook.id}/test`
        })
        console.log('Test response:', testResponse)
      } catch (testError) {
        console.log('Test error:', testError.message)
      }
      
    } else {
      console.log('No webhook found, would create one but filter syntax needs updating')
    }
  } catch (error) {
    console.error('Error:', error.message)
  }
}

createWebhook()