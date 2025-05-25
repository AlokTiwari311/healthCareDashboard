import {
  LayoutDashboard,
  Clock,
  Calendar,
  SquarePlus,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";

import CustomGridIcon from "../assets/iconsSVG/CustomGridIcon";
import CustomCalendarIcon from "../assets/iconsSVG/CustomCalendarIcon";

export const navigationLinks = [
  { id: 1, name: "Dashboard", icon: CustomGridIcon, active: true },
  { id: 2, name: "History", icon: Clock, active: false },
  { id: 3, name: "Calendar", icon: CustomCalendarIcon, active: false },
  { id: 4, name: "Appointments", icon: SquarePlus, active: false },
  { id: 5, name: "Statistics", icon: BarChart3, active: false },
  { id: 6, name: "Chat", icon: MessageCircle, active: false },
  { id: 7, name: "Support", icon: HelpCircle, active: false },
  { id: 8, name: "Setting", icon: Settings, active: false },
];
