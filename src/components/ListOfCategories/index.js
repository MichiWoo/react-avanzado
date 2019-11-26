import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

// import { categories } from '../../../api/db.json'

// function useCategoriesData () {
//   const [categories, setCategories] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     fetch('https://petgram-server-michiwoo-py8mk8pt0.now.sh/categories')
//       .then(res => res.json())
//       .then(response => {
//         setCategories(response)
//         setLoading(false)
//       })
//       .catch(err => console.log(err))
//   }, [])
// }

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://petgram-server-michiwoo-py8mk8pt0.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
