export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      service_requests: {
        Row: {
          assigned_to: string | null
          attachments: Json
          brand: string | null
          created_at: string
          customer_name: string
          customer_type: string
          device_type: string
          email: string | null
          estimated_price: number | null
          final_price: number | null
          id: string
          important_data: string | null
          internal_notes: string | null
          issue_description: string
          issue_start: string | null
          lead_source: string | null
          model: string | null
          neighborhood: string | null
          operating_system: string | null
          powers_on: string | null
          preferred_date: string | null
          preferred_language: string
          request_number: string
          service_interest: string | null
          service_mode: string
          source_path: string | null
          status: Database["public"]["Enums"]["service_request_status"]
          updated_at: string
          urgency: string | null
          whatsapp: string
        }
        Insert: {
          assigned_to?: string | null
          attachments?: Json
          brand?: string | null
          created_at?: string
          customer_name: string
          customer_type: string
          device_type: string
          email?: string | null
          estimated_price?: number | null
          final_price?: number | null
          id?: string
          important_data?: string | null
          internal_notes?: string | null
          issue_description: string
          issue_start?: string | null
          lead_source?: string | null
          model?: string | null
          neighborhood?: string | null
          operating_system?: string | null
          powers_on?: string | null
          preferred_date?: string | null
          preferred_language?: string
          request_number?: string
          service_interest?: string | null
          service_mode: string
          source_path?: string | null
          status?: Database["public"]["Enums"]["service_request_status"]
          updated_at?: string
          urgency?: string | null
          whatsapp: string
        }
        Update: {
          assigned_to?: string | null
          attachments?: Json
          brand?: string | null
          created_at?: string
          customer_name?: string
          customer_type?: string
          device_type?: string
          email?: string | null
          estimated_price?: number | null
          final_price?: number | null
          id?: string
          important_data?: string | null
          internal_notes?: string | null
          issue_description?: string
          issue_start?: string | null
          lead_source?: string | null
          model?: string | null
          neighborhood?: string | null
          operating_system?: string | null
          powers_on?: string | null
          preferred_date?: string | null
          preferred_language?: string
          request_number?: string
          service_interest?: string | null
          service_mode?: string
          source_path?: string | null
          status?: Database["public"]["Enums"]["service_request_status"]
          updated_at?: string
          urgency?: string | null
          whatsapp?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      submit_service_request: {
        Args: {
          p_brand?: string | null
          p_customer_name: string
          p_customer_type: string
          p_device_type: string
          p_email?: string | null
          p_important_data?: string | null
          p_issue_description: string
          p_issue_start?: string | null
          p_model?: string | null
          p_neighborhood?: string | null
          p_operating_system?: string | null
          p_powers_on?: string | null
          p_preferred_date?: string | null
          p_preferred_language?: string
          p_service_mode: string
          p_urgency?: string | null
          p_whatsapp: string
        }
        Returns: string
      }
      submit_service_request_v2: {
        Args: {
          p_brand?: string | null
          p_customer_name: string
          p_customer_type: string
          p_device_type: string
          p_email?: string | null
          p_important_data?: string | null
          p_issue_description: string
          p_issue_start?: string | null
          p_lead_source?: string | null
          p_model?: string | null
          p_neighborhood?: string | null
          p_operating_system?: string | null
          p_powers_on?: string | null
          p_preferred_date?: string | null
          p_preferred_language?: string
          p_service_interest?: string | null
          p_service_mode: string
          p_source_path?: string | null
          p_urgency?: string | null
          p_whatsapp: string
        }
        Returns: string
      }
    }
    Enums: {
      app_role: "admin" | "staff"
      service_request_status:
        | "nueva"
        | "contactado"
        | "diagnostico_pendiente"
        | "esperando_equipo"
        | "esperando_autorizacion"
        | "esperando_pieza"
        | "en_reparacion"
        | "listo"
        | "resuelto"
        | "cancelado"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends { Row: infer R }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends { Row: infer R }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends { Insert: infer I }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Insert: infer I }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends { Update: infer U }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends { Update: infer U }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never
