import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MessagesContainer from './components/Messages/MessagesContainer'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'

export default function App(props) {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<ProfileContainer />}
          />
          <Route
            path="/messages/*"
            element={
              <MessagesContainer />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  )
}
