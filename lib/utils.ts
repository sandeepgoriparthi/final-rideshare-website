import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateFreightCost({
  baseRate,
  weightFactor,
  weight,
  distanceFactor,
  distance,
  additionalCharges
}: {
  baseRate: number;
  weightFactor: number;
  weight: number;
  distanceFactor: number;
  distance: number;
  additionalCharges: number;
}): number {
  return (baseRate + weightFactor * weight) * (distanceFactor * distance) + additionalCharges;
}

// Base rates for different freight types
export const FREIGHT_RATES = {
  ltl: {
    baseRate: 150,
    weightFactor: 0.15,
    distanceFactor: 0.75,
  },
  ftl: {
    baseRate: 500,
    weightFactor: 0.10,
    distanceFactor: 1.25,
  },
  partial: {
    baseRate: 300,
    weightFactor: 0.12,
    distanceFactor: 1.0,
  }
};