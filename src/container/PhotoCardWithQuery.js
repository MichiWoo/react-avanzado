import React from 'react'
import { PhotoCard } from '../components/photoCard'
import { gql } from 'apollo-boost'// permite hacer las queries como si fuera un string
import { Query } from 'react-apollo'// permite utilizar render props

const query = gql`
query getSinglePhoto($id: ID!){
  photo(id: $id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const PhotoCardWithQuery = ({ id }) => {
  console.log('ID', id)
  return (
    <Query query={query} variables={{ id }}>
      {
        ({ loading, error, data }) => {
          if (loading) return null
          const { photo = {} } = data
          return <PhotoCard {...photo} />
        }
      }
    </Query>
  )
}
