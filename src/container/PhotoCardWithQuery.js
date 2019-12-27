import React from 'react'
import { PhotoCard } from '../components/photoCard'
import { gql } from 'apollo-boost'// permite hacer las queries como si fuera un string
import { Query } from 'react-apollo'// permite utilizar render props

const GET_SINGLE_PHOTO = gql`
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
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => {
  console.log('ID', id)
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
