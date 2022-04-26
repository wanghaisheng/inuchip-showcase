export interface ProductData {
  id: string
  title: string
  description: string
  categories: string[]
  url: string
  github_url: string
  twitter: string
  instagram: string
  images: string[]
  slug: string
  supabase_features: []
  views: number
}

export interface TagData {
  id: string
  title: string
  description: string
  categories: string[]
  url: string
  github_url: string
  twitter: string
  instagram: string
  images: string[]
  slug: string
  supabase_features: string[]
  approved: boolean
  created_at: Date
  views: number
}
