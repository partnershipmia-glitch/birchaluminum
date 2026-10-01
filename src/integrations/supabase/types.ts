export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      comment_reports: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          reason: string | null
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          reason?: string | null
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          reason?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comment_reports_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          article_id: string
          author_name: string
          body: string
          created_at: string
          hidden: boolean
          id: string
          parent_id: string | null
          user_id: string
        }
        Insert: {
          article_id: string
          author_name: string
          body: string
          created_at?: string
          hidden?: boolean
          id?: string
          parent_id?: string | null
          user_id: string
        }
        Update: {
          article_id?: string
          author_name?: string
          body?: string
          created_at?: string
          hidden?: boolean
          id?: string
          parent_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "news_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      commodities: {
        Row: {
          active: boolean
          basis: string
          category: string
          code: string
          created_at: string
          id: string
          name: string
          sort: number
          source: string
          unit: string
        }
        Insert: {
          active?: boolean
          basis: string
          category: string
          code: string
          created_at?: string
          id?: string
          name: string
          sort?: number
          source: string
          unit: string
        }
        Update: {
          active?: boolean
          basis?: string
          category?: string
          code?: string
          created_at?: string
          id?: string
          name?: string
          sort?: number
          source?: string
          unit?: string
        }
        Relationships: []
      }
      facilities: {
        Row: {
          activity_status: string | null
          annual_capacity_lb: number | null
          capacity: string | null
          capacity_source_url: string | null
          city: string | null
          company: string
          completion: string | null
          created_at: string
          id: string
          kind: string
          lat: number
          linkedin: string | null
          lng: number
          name: string
          products: string | null
          state: string
          status: string
          website: string | null
        }
        Insert: {
          activity_status?: string | null
          annual_capacity_lb?: number | null
          capacity?: string | null
          capacity_source_url?: string | null
          city?: string | null
          company: string
          completion?: string | null
          created_at?: string
          id?: string
          kind: string
          lat: number
          linkedin?: string | null
          lng: number
          name: string
          products?: string | null
          state: string
          status: string
          website?: string | null
        }
        Update: {
          activity_status?: string | null
          annual_capacity_lb?: number | null
          capacity?: string | null
          capacity_source_url?: string | null
          city?: string | null
          company?: string
          completion?: string | null
          created_at?: string
          id?: string
          kind?: string
          lat?: number
          linkedin?: string | null
          lng?: number
          name?: string
          products?: string | null
          state?: string
          status?: string
          website?: string | null
        }
        Relationships: []
      }
      job_state: {
        Row: {
          job: string
          last_run: string | null
          locked_until: string | null
          paused_reason: string | null
        }
        Insert: {
          job: string
          last_run?: string | null
          locked_until?: string | null
          paused_reason?: string | null
        }
        Update: {
          job?: string
          last_run?: string | null
          locked_until?: string | null
          paused_reason?: string | null
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          category: string | null
          created_at: string
          id: string
          published_at: string
          source_id: string | null
          source_name: string
          summarized: boolean
          summary: string | null
          title: string
          url: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          published_at?: string
          source_id?: string | null
          source_name: string
          summarized?: boolean
          summary?: string | null
          title: string
          url: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          published_at?: string
          source_id?: string | null
          source_name?: string
          summarized?: boolean
          summary?: string | null
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "news_articles_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "news_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      news_sources: {
        Row: {
          active: boolean
          feed_url: string | null
          id: string
          name: string
          site_url: string
        }
        Insert: {
          active?: boolean
          feed_url?: string | null
          id?: string
          name: string
          site_url: string
        }
        Update: {
          active?: boolean
          feed_url?: string | null
          id?: string
          name?: string
          site_url?: string
        }
        Relationships: []
      }
      price_points: {
        Row: {
          commodity_id: string
          created_at: string
          id: string
          note: string | null
          price: number
          recorded_at: string
        }
        Insert: {
          commodity_id: string
          created_at?: string
          id?: string
          note?: string | null
          price: number
          recorded_at?: string
        }
        Update: {
          commodity_id?: string
          created_at?: string
          id?: string
          note?: string | null
          price?: number
          recorded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "price_points_commodity_id_fkey"
            columns: ["commodity_id"]
            isOneToOne: false
            referencedRelation: "commodities"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
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
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
