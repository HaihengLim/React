import HomePage from '../pages/HomePage';
import ReelPage from '../pages/ReelPage';
import FriendPage from "../pages/FriendPage";
import MarketPlacePage from "../pages/MarketPlacePage";
import NotificationPage from "../pages/NotificationPage";
import {
  House,
  Users,
  Clapperboard,
  Bell,
  Store
} from 'lucide-react';

export const routes = [
  {
    path: '/',
    label: <House />,
    element: <HomePage />,
  },
  {
    path: '/friends',
    label: <Users />,
    element: <FriendPage />,
  },
  {
    path: '/reels',
    label: <Clapperboard />,
    element: <ReelPage />,
  },
  {
    path: '/notifications',
    label: <Bell />,
    element: <NotificationPage />,
  },
  {
    path: '/market-place',
    label: <Store />,
    element: <MarketPlacePage />,
  }
];