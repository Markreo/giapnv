import {InjectionToken} from "@angular/core";

export type SupabaseConfig = { supabaseUrl: string, supabaseKey: string }

export const SUPABASE_CONFIG = new InjectionToken<SupabaseConfig>("Supabase config");

export type ImplementDatabase = any
