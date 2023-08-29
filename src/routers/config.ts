import { RouteTabName } from '@/constants';
import Frineds from '@/pages/frineds';
import Home from '@/pages/home';
import Message from '@/pages/message';
import Mine from '@/pages/mine';

interface Route {
  name: string;
  component: React.FC;
  meta?: Record<string, any>;
  children?: Route[];
}

const createRoute = (
  name: string,
  component: React.ComponentType<any>,
  meta?: Record<string, any>,
  children?: Route[]
) => ({
  name,
  component,
  meta,
  children,
});

export default [
  createRoute(RouteTabName.Home, Home),
  createRoute(RouteTabName.Frineds, Frineds),
  createRoute(RouteTabName.Message, Message),
  createRoute(RouteTabName.Mine, Mine),
];
