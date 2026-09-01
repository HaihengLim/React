import type { LucideIcon } from 'lucide-react';

export interface navIconCompInt {
  icon: LucideIcon;
  active?: boolean;
  size?: number;
}

export const Privacy = {
  public: 'public',
  friend: 'friend',
  private: 'private',
} as const;

// make it become purely ts type
type Privacy = (typeof Privacy)[keyof typeof Privacy];

export interface postCompProps {
  id: number;
  pageName: string;
  isVerified: boolean;
  status: string;
  imagePost: string[];
  like: number;
  comment: number;
  share: number;
  dateOfPost: string;
  privacy: Privacy;
}
