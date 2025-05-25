import {
  LayoutDashboard,
  Clock,
  Calendar,
  Users,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";

export const navigationLinks = [
  { id: 1, name: "Dashboard", icon: LayoutDashboard, active: true },
  { id: 2, name: "History", icon: Clock, active: false },
  { id: 3, name: "Calendar", icon: Calendar, active: false },
  { id: 4, name: "Appointments", icon: Users, active: false },
  { id: 5, name: "Statistics", icon: BarChart3, active: false },
  { id: 6, name: "Tests", icon: TestTube, active: false },
  { id: 7, name: "Chat", icon: MessageCircle, active: false },
  { id: 8, name: "Support", icon: HelpCircle, active: false },
  { id: 9, name: "Setting", icon: Settings, active: false },
];
