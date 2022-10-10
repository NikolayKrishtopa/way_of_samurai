import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Messages from './components/Messages/Messages'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'

export default function App(props) {
  const { state, onPostTextChange, addPost } = props
  const { profile, dialogs } = state
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profile={profile}
                onPostTextChange={onPostTextChange}
                onAddPost={addPost}
              />
            }
          />
          <Route path="/messages/*" element={<Messages dialogs={dialogs} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}
