import React from 'react'
import { connect } from 'react-redux'
import Sort from '../Sort/Sort'

const SortContainer = ({ sort }) => {
   return <Sort sort={sort} items={[{ name: "Популярное", type: 'popular' }, { name: "Цена", type: "price" }, { name: "Алфавит", type: "alphabet" }]} />
}

const mapStateToProps = (state) => ({
   category: state.filters.category,
   sort: state.filters.sortBy
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer)
