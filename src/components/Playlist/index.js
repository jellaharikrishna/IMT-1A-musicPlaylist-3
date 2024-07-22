import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const Playlist = props => {
  const {playlistDetails, onDeletePlaylist} = props
  const {id, imageUrl, name, genre, duration} = playlistDetails

  const onClickDelete = () => {
    onDeletePlaylist(id)
  }

  return (
    <li className="playlist-card">
      <div className="image-name-genre-card">
        <img src={imageUrl} alt="track" className="image-size" />
        <div className="name-genre-card">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-card">
        <p className="duration">{duration}</p>
        <button
          className="delete-btn"
          type="button"
          data-testid="delete"
          aria-label="close"
          onClick={onClickDelete}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default Playlist
