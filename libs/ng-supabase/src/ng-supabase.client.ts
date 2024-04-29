import {SupabaseClient} from "@supabase/supabase-js";
import { ImplementDatabase } from './type';


export class NgSupabaseClient extends SupabaseClient<ImplementDatabase> {
}
