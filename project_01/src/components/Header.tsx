import FacebookLogo from '../assets/Facebook_f_logo_(2021).png';
import { Grip, MessageCircleMore, Bell, UserRound } from 'lucide-react';
import NavBar from './NavBar';
import './style/header.css';

export default function Header() {
  return (
    <header>
      <aside className="brand-wrapper">
        <img src={FacebookLogo} alt="Facebook Logo" className="img-logo" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="search-bar"
        />
      </aside>

      <NavBar />

      <aside className="profile-wrapper">
        <section className="menu-wrapper">
          <Grip size={28} />

          <div className="icon-wrapper">
            <MessageCircleMore size={28} />
            <span className="badge">2</span>
          </div>

          <div className="icon-wrapper">
            <Bell size={28} />
            <span className="badge">15</span>
          </div>
        </section>

        <div className="user-profile-wrapper">
          <UserRound />
          <span className="red-dot"></span>
        </div>
      </aside>
    </header>
  );
}
