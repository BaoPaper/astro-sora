// Reading time interface
export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

// TOC item interface
export interface TOCItem {
  level: number
  text: string
  id: string
  index: number
}

import { type CollectionEntry } from 'astro:content'

// PostList component props interface
export interface PostListProps {
  posts: CollectionEntry<'posts'>[]
}
