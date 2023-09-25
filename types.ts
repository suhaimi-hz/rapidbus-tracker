export interface BusLocation {
  dt_received: string; // "2023-08-15 16:00:57"
  dt_gps: string;
  latitude: number;
  longitude: number;
  dir: string;
  speed: number;
  angle: number;
  route: string;
  bus_no: string;
  trip_no: string;
  captain_id: string;
  trip_rev_kind: string;
  engine_status: number;
  accessibility: number;
  busstop_id: string;
  provider: string;
}
