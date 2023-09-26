import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchOrder = () => {
	const [query, setQuery] = useState()
	const navigate = useNavigate()
	const handleSearchOrder = function (e) {
		e.preventDefault()
		if (!query) return
		navigate(`/order/${query}`)
		setQuery('')
	}
	return (
		<form onSubmit={handleSearchOrder}>
			<input value={query} onChange={e => setQuery(e.target.value)} placeholder="search order#" />
		</form>
	)
}

export default SearchOrder
