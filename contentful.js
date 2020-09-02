const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function fetchPostContent() {
  const entries = await client.getEntries({
    content_type: 'post',
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchHomeContent() {
  const entries = await client.getEntries({
    content_type: 'home',
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchMenuContent() {
  const entries = await client.getEntries({
    content_type: 'menu',
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchWorkContent() {
  const entries = await client.getEntries({
    content_type: 'work',
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchProjectsContent() {
  const entries = await client.getEntries({
    content_type: 'projects',
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchAboutContent() {
  const entries = await client.getEntries({
    content_type: 'about',
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}