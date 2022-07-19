import React, {useState} from "react";

export default function SearchBar() {

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch()
    setSearch('')
  }

  return (
    <div>
      <button></button>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <input
          name={'search'}
          value={search}
          onChange={(e) => {handleChange(e)}}
          type={'search'}
          placeholder={'Search NFTs!'}
        />
        <button type={'submit'}>Search!</button>
      </form>
    </div>
  )
}
