export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bread: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      cheese: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      condiments: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      meats: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      sandwiches: {
        Row: {
          description: string | null
          id: string
          imageUrl: string | null
          name: string
          price: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          imageUrl?: string | null
          name: string
          price?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          imageUrl?: string | null
          name?: string
          price?: string | null
        }
        Relationships: []
      }
      SandwichesBread: {
        Row: {
          BreadID: string
          SandwichID: string
        }
        Insert: {
          BreadID: string
          SandwichID: string
        }
        Update: {
          BreadID?: string
          SandwichID?: string
        }
        Relationships: [
          {
            foreignKeyName: "SandwichesBread_BreadID_fkey"
            columns: ["BreadID"]
            isOneToOne: false
            referencedRelation: "bread"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SandwichesBread_SandwichID_fkey"
            columns: ["SandwichID"]
            isOneToOne: false
            referencedRelation: "sandwiches"
            referencedColumns: ["id"]
          }
        ]
      }
      SandwichesMeat: {
        Row: {
          id: string
          MeatID: string | null
          SandwichID: string | null
        }
        Insert: {
          id?: string
          MeatID?: string | null
          SandwichID?: string | null
        }
        Update: {
          id?: string
          MeatID?: string | null
          SandwichID?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "SandwichesMeat_MeatID_fkey"
            columns: ["MeatID"]
            isOneToOne: false
            referencedRelation: "meats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SandwichesMeat_SandwichID_fkey"
            columns: ["SandwichID"]
            isOneToOne: false
            referencedRelation: "sandwiches"
            referencedColumns: ["id"]
          }
        ]
      }
      SandwichesVeggies: {
        Row: {
          SandwichID: string | null
          VeggieID: string | null
        }
        Insert: {
          SandwichID?: string | null
          VeggieID?: string | null
        }
        Update: {
          SandwichID?: string | null
          VeggieID?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "SandwichesVeggies_SandwichID_fkey"
            columns: ["SandwichID"]
            isOneToOne: false
            referencedRelation: "sandwiches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SandwichesVeggies_VeggieID_fkey"
            columns: ["VeggieID"]
            isOneToOne: false
            referencedRelation: "veggies"
            referencedColumns: ["id"]
          }
        ]
      }
      veggies: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
