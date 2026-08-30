import Star from "@/components/Atoms/Icon/icons/star.svg";
import { Search, Filter, Bell, Clock4, Plus } from "lucide-react";

export const IconsRegistry = {
  Search,
  Filter,
  Bell,
  Clock4,
  Star,
  Plus,
};

export type IconName = keyof typeof IconsRegistry;
