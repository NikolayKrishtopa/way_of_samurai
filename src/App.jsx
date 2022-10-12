import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Messages from './components/Messages/Messages'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'

export default function App(props) {
  const { state, dispatch } = props
  const { profile, conversations } = state
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile profile={profile} dispatch={dispatch} />}
          />
          <Route
            path="/messages/*"
            element={<Messages dialogs={conversations.dialogs} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}
