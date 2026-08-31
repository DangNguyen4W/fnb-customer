import Star from "@/components/Atoms/Icon/icons/star.svg";
import Heart from "@/components/Atoms/Icon/icons/heart.svg";
import Share from "@/components/Atoms/Icon/icons/share.svg";
import { Search, Filter, Bell, Clock4, Plus, ArrowLeft, X } from "lucide-react";

export const IconsRegistry = {
  Search,
  Filter,
  Bell,
  Clock4,
  Star,
  Plus,
  ArrowLeft,
  X,
  Heart,
  Share,
};

export type IconName = keyof typeof IconsRegistry;
