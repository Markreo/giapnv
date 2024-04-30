import { SUPABASE_CONFIG, SupabaseConfig } from './type';
import { NgSupabaseAuthClient } from './ng-supabase-auth.client';
import { Provider } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { NgSupabaseClient } from './ng-supabase.client';

export const SupabaseProviders = (config: SupabaseConfig): Provider[] => [
  {
    provide: SUPABASE_CONFIG,
    useValue: config,
  },
  {
    provide: NgSupabaseClient,
    useFactory: (config: SupabaseConfig) =>
      createClient(config.supabaseUrl, config.supabaseKey),
    deps: [SUPABASE_CONFIG],
  },
  {
    provide: NgSupabaseAuthClient,
    useFactory: (ngSupabaseClient: NgSupabaseClient) => ngSupabaseClient.auth,
    deps: [NgSupabaseClient],
  },
];
