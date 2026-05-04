import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2016-20',
    title: 'Mazagaon Dock',
    subtitle: 'Fabricator & Machinist',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2020-24',
    title: 'Arena Animation',
    subtitle: 'VFX & Animation (Distinction)',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2020-25',
    title: 'WOOT Factor',
    subtitle: 'Lead Graphic Designer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025-26',
    title: 'HyStez',
    subtitle: 'Associate Creative Director',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'FUTURE',
    title: 'Visual Identity',
    subtitle: 'Creative Direction & UI/UX',
    position: 'right',
  },
]