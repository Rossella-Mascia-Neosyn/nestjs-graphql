export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  float8: { input: any; output: any };
  timestamptz: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CoachInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  payment_account_number?: InputMaybe<Scalars['String']['input']>;
  payment_account_owner?: InputMaybe<Scalars['String']['input']>;
  payment_threshold?: InputMaybe<Scalars['Int']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdi_code?: InputMaybe<Scalars['String']['input']>;
  services_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  single_comment_rate?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  vat_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateHouseInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type GenerateTempCodeInput = {
  email: Scalars['String']['input'];
};

export type GenerateTempCodeOutput = {
  email: Scalars['String']['output'];
};

export type GetUploadProfileImageAccessInfoOutput = {
  accountId: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type House = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Interests = {
  id: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type RefreshTokenOutput = {
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export enum RegistrationType {
  Induced = 'INDUCED',
  Self = 'SELF',
}

export type SignupInput = {
  coach_infos?: InputMaybe<CoachInput>;
  company_id?: InputMaybe<Scalars['Int']['input']>;
  description_bio?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  interests_id: Array<InputMaybe<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_cdn_id?: InputMaybe<Scalars['String']['input']>;
  registration_type: RegistrationType;
  role: UserRole;
  status: UserStatus;
  subscription_type: SubscriptionType;
  surname: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export enum SubscriptionType {
  Basic = 'BASIC',
  FreeCoach = 'FREE_COACH',
  Premium = 'PREMIUM',
}

export type UpdateHouseInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Coach = 'COACH',
  CompanyAdmin = 'COMPANY_ADMIN',
  CompanySecretary = 'COMPANY_SECRETARY',
  User = 'USER',
}

export enum UserStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Pending = 'PENDING',
  ToBeVerified = 'TO_BE_VERIFIED',
  Verified = 'VERIFIED',
}

export type UsersOutput = {
  company_id?: Maybe<Scalars['Int']['output']>;
  description_bio?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  interests: Array<Maybe<Interests>>;
  is_temporary_password: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  photo_cdn_id?: Maybe<Scalars['String']['output']>;
  refreshToken: Scalars['String']['output'];
  role: Scalars['String']['output'];
  subscription_type: Scalars['String']['output'];
  surname: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user_features: Array<Maybe<User_Features_ActionType>>;
};

/** columns and relationships of "audio" */
export type Audio = {
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['bigint']['output'];
  format?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  provider?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  url: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByUserId: Users;
  user_id: Scalars['bigint']['output'];
};

/** columns and relationships of "audio" */
export type AudioPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "audio" */
export type AudioPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "audio" */
export type AudioStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "audio" */
export type AudioStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** aggregated selection of "audio" */
export type Audio_Aggregate = {
  aggregate?: Maybe<Audio_Aggregate_Fields>;
  nodes: Array<Audio>;
};

export type Audio_Aggregate_Bool_Exp = {
  count?: InputMaybe<Audio_Aggregate_Bool_Exp_Count>;
};

export type Audio_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Audio_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Audio_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "audio" */
export type Audio_Aggregate_Fields = {
  avg?: Maybe<Audio_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Audio_Max_Fields>;
  min?: Maybe<Audio_Min_Fields>;
  stddev?: Maybe<Audio_Stddev_Fields>;
  stddev_pop?: Maybe<Audio_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audio_Stddev_Samp_Fields>;
  sum?: Maybe<Audio_Sum_Fields>;
  var_pop?: Maybe<Audio_Var_Pop_Fields>;
  var_samp?: Maybe<Audio_Var_Samp_Fields>;
  variance?: Maybe<Audio_Variance_Fields>;
};

/** aggregate fields of "audio" */
export type Audio_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audio_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "audio" */
export type Audio_Aggregate_Order_By = {
  avg?: InputMaybe<Audio_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Audio_Max_Order_By>;
  min?: InputMaybe<Audio_Min_Order_By>;
  stddev?: InputMaybe<Audio_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Audio_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Audio_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Audio_Sum_Order_By>;
  var_pop?: InputMaybe<Audio_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Audio_Var_Samp_Order_By>;
  variance?: InputMaybe<Audio_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "audio" */
export type Audio_Arr_Rel_Insert_Input = {
  data: Array<Audio_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Audio_On_Conflict>;
};

/** aggregate avg on columns */
export type Audio_Avg_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "audio" */
export type Audio_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "audio". All fields are combined with a logical 'AND'. */
export type Audio_Bool_Exp = {
  _and?: InputMaybe<Array<Audio_Bool_Exp>>;
  _not?: InputMaybe<Audio_Bool_Exp>;
  _or?: InputMaybe<Array<Audio_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  format?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  stitches?: InputMaybe<Stitches_Bool_Exp>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByUserId?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "audio" */
export enum Audio_Constraint {
  /** unique or primary key constraint on columns "id" */
  AudioPkey = 'audio_pkey',
}

/** input type for incrementing numeric columns in table "audio" */
export type Audio_Inc_Input = {
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "audio" */
export type Audio_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  provider?: InputMaybe<Scalars['String']['input']>;
  stitches?: InputMaybe<Stitches_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Audio_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "audio" */
export type Audio_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  format?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Audio_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "audio" */
export type Audio_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  format?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "audio" */
export type Audio_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audio>;
};

/** input type for inserting object relation for remote table "audio" */
export type Audio_Obj_Rel_Insert_Input = {
  data: Audio_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Audio_On_Conflict>;
};

/** on_conflict condition type for table "audio" */
export type Audio_On_Conflict = {
  constraint: Audio_Constraint;
  update_columns?: Array<Audio_Update_Column>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

/** Ordering options when selecting data from "audio". */
export type Audio_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  format?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  provider?: InputMaybe<Order_By>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByUserId?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audio */
export type Audio_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "audio" */
export enum Audio_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "audio" */
export type Audio_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Audio_Stddev_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "audio" */
export type Audio_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Audio_Stddev_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "audio" */
export type Audio_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Audio_Stddev_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "audio" */
export type Audio_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "audio" */
export type Audio_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audio_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audio_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Audio_Sum_Fields = {
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "audio" */
export type Audio_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "audio" */
export enum Audio_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

export type Audio_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Audio_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audio_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audio_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Audio_Var_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "audio" */
export type Audio_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Audio_Var_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "audio" */
export type Audio_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Audio_Variance_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "audio" */
export type Audio_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "buckets" */
export type Buckets = {
  accelerate_end_point?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  cloud_provider: Cloud_Providers;
  cloud_provider_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  endpoint?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  provider: Providers;
  provider_name: Providers_Enum;
  public_endpoint: Scalars['Boolean']['output'];
  region: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  videos: Array<Video>;
  /** An aggregate relationship */
  videos_aggregate: Video_Aggregate;
};

/** columns and relationships of "buckets" */
export type BucketsVideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** columns and relationships of "buckets" */
export type BucketsVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** aggregated selection of "buckets" */
export type Buckets_Aggregate = {
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

export type Buckets_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Buckets_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Buckets_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Buckets_Aggregate_Bool_Exp_Count>;
};

export type Buckets_Aggregate_Bool_Exp_Bool_And = {
  arguments: Buckets_Select_Column_Buckets_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Buckets_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Buckets_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Buckets_Select_Column_Buckets_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Buckets_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Buckets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Buckets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "buckets" */
export type Buckets_Aggregate_Fields = {
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};

/** aggregate fields of "buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "buckets" */
export type Buckets_Aggregate_Order_By = {
  avg?: InputMaybe<Buckets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Buckets_Max_Order_By>;
  min?: InputMaybe<Buckets_Min_Order_By>;
  stddev?: InputMaybe<Buckets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Buckets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Buckets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Buckets_Sum_Order_By>;
  var_pop?: InputMaybe<Buckets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Buckets_Var_Samp_Order_By>;
  variance?: InputMaybe<Buckets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "buckets" */
export type Buckets_Arr_Rel_Insert_Input = {
  data: Array<Buckets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "buckets" */
export type Buckets_Avg_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  accelerate_end_point?: InputMaybe<Boolean_Comparison_Exp>;
  cloud_provider?: InputMaybe<Cloud_Providers_Bool_Exp>;
  cloud_provider_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  endpoint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<Providers_Bool_Exp>;
  provider_name?: InputMaybe<Providers_Enum_Comparison_Exp>;
  public_endpoint?: InputMaybe<Boolean_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  videos?: InputMaybe<Video_Bool_Exp>;
  videos_aggregate?: InputMaybe<Video_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "name" */
  BucketsNameKey = 'buckets_name_key',
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey',
}

/** input type for incrementing numeric columns in table "buckets" */
export type Buckets_Inc_Input = {
  cloud_provider_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "buckets" */
export type Buckets_Insert_Input = {
  accelerate_end_point?: InputMaybe<Scalars['Boolean']['input']>;
  cloud_provider?: InputMaybe<Cloud_Providers_Obj_Rel_Insert_Input>;
  cloud_provider_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Providers_Obj_Rel_Insert_Input>;
  provider_name?: InputMaybe<Providers_Enum>;
  public_endpoint?: InputMaybe<Scalars['Boolean']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  videos?: InputMaybe<Video_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  cloud_provider_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "buckets" */
export type Buckets_Max_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endpoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  cloud_provider_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "buckets" */
export type Buckets_Min_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endpoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "buckets" */
export type Buckets_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "buckets". */
export type Buckets_Order_By = {
  accelerate_end_point?: InputMaybe<Order_By>;
  cloud_provider?: InputMaybe<Cloud_Providers_Order_By>;
  cloud_provider_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endpoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  provider?: InputMaybe<Providers_Order_By>;
  provider_name?: InputMaybe<Order_By>;
  public_endpoint?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  videos_aggregate?: InputMaybe<Video_Aggregate_Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "buckets" */
export enum Buckets_Select_Column {
  /** column name */
  AccelerateEndPoint = 'accelerate_end_point',
  /** column name */
  CloudProviderId = 'cloud_provider_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Endpoint = 'endpoint',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  PublicEndpoint = 'public_endpoint',
  /** column name */
  Region = 'region',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "buckets_aggregate_bool_exp_bool_and_arguments_columns" columns of table "buckets" */
export enum Buckets_Select_Column_Buckets_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  AccelerateEndPoint = 'accelerate_end_point',
  /** column name */
  PublicEndpoint = 'public_endpoint',
}

/** select "buckets_aggregate_bool_exp_bool_or_arguments_columns" columns of table "buckets" */
export enum Buckets_Select_Column_Buckets_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  AccelerateEndPoint = 'accelerate_end_point',
  /** column name */
  PublicEndpoint = 'public_endpoint',
}

/** input type for updating data in table "buckets" */
export type Buckets_Set_Input = {
  accelerate_end_point?: InputMaybe<Scalars['Boolean']['input']>;
  cloud_provider_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Providers_Enum>;
  public_endpoint?: InputMaybe<Scalars['Boolean']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "buckets" */
export type Buckets_Stddev_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "buckets" */
export type Buckets_Stddev_Pop_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "buckets" */
export type Buckets_Stddev_Samp_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  accelerate_end_point?: InputMaybe<Scalars['Boolean']['input']>;
  cloud_provider_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endpoint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Providers_Enum>;
  public_endpoint?: InputMaybe<Scalars['Boolean']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  cloud_provider_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "buckets" */
export type Buckets_Sum_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "buckets" */
export enum Buckets_Update_Column {
  /** column name */
  AccelerateEndPoint = 'accelerate_end_point',
  /** column name */
  CloudProviderId = 'cloud_provider_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Endpoint = 'endpoint',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  PublicEndpoint = 'public_endpoint',
  /** column name */
  Region = 'region',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "buckets" */
export type Buckets_Var_Pop_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "buckets" */
export type Buckets_Var_Samp_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  cloud_provider_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "buckets" */
export type Buckets_Variance_Order_By = {
  cloud_provider_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type ChangePasswordInput = {
  id: Scalars['Int']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangePasswordOutput = {
  id: Scalars['Int']['output'];
};

/** columns and relationships of "cloud_providers" */
export type Cloud_Providers = {
  access_key_id?: Maybe<Scalars['String']['output']>;
  account_id?: Maybe<Scalars['String']['output']>;
  additional_token?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  buckets: Array<Buckets>;
  /** An aggregate relationship */
  buckets_aggregate: Buckets_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  provider: Providers;
  provider_name: Providers_Enum;
  secret_access_key?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "cloud_providers" */
export type Cloud_ProvidersBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** columns and relationships of "cloud_providers" */
export type Cloud_ProvidersBuckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** aggregated selection of "cloud_providers" */
export type Cloud_Providers_Aggregate = {
  aggregate?: Maybe<Cloud_Providers_Aggregate_Fields>;
  nodes: Array<Cloud_Providers>;
};

export type Cloud_Providers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cloud_Providers_Aggregate_Bool_Exp_Count>;
};

export type Cloud_Providers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cloud_Providers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cloud_providers" */
export type Cloud_Providers_Aggregate_Fields = {
  avg?: Maybe<Cloud_Providers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cloud_Providers_Max_Fields>;
  min?: Maybe<Cloud_Providers_Min_Fields>;
  stddev?: Maybe<Cloud_Providers_Stddev_Fields>;
  stddev_pop?: Maybe<Cloud_Providers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cloud_Providers_Stddev_Samp_Fields>;
  sum?: Maybe<Cloud_Providers_Sum_Fields>;
  var_pop?: Maybe<Cloud_Providers_Var_Pop_Fields>;
  var_samp?: Maybe<Cloud_Providers_Var_Samp_Fields>;
  variance?: Maybe<Cloud_Providers_Variance_Fields>;
};

/** aggregate fields of "cloud_providers" */
export type Cloud_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cloud_providers" */
export type Cloud_Providers_Aggregate_Order_By = {
  avg?: InputMaybe<Cloud_Providers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cloud_Providers_Max_Order_By>;
  min?: InputMaybe<Cloud_Providers_Min_Order_By>;
  stddev?: InputMaybe<Cloud_Providers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cloud_Providers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cloud_Providers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cloud_Providers_Sum_Order_By>;
  var_pop?: InputMaybe<Cloud_Providers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cloud_Providers_Var_Samp_Order_By>;
  variance?: InputMaybe<Cloud_Providers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cloud_providers" */
export type Cloud_Providers_Arr_Rel_Insert_Input = {
  data: Array<Cloud_Providers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cloud_Providers_On_Conflict>;
};

/** aggregate avg on columns */
export type Cloud_Providers_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "cloud_providers" */
export type Cloud_Providers_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cloud_providers". All fields are combined with a logical 'AND'. */
export type Cloud_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Cloud_Providers_Bool_Exp>>;
  _not?: InputMaybe<Cloud_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Cloud_Providers_Bool_Exp>>;
  access_key_id?: InputMaybe<String_Comparison_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  additional_token?: InputMaybe<String_Comparison_Exp>;
  buckets?: InputMaybe<Buckets_Bool_Exp>;
  buckets_aggregate?: InputMaybe<Buckets_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<Providers_Bool_Exp>;
  provider_name?: InputMaybe<Providers_Enum_Comparison_Exp>;
  secret_access_key?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cloud_providers" */
export enum Cloud_Providers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CloudProvidersIdKey = 'cloud_providers_id_key',
  /** unique or primary key constraint on columns "id" */
  CloudProvidersPkey = 'cloud_providers_pkey',
}

/** input type for incrementing numeric columns in table "cloud_providers" */
export type Cloud_Providers_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "cloud_providers" */
export type Cloud_Providers_Insert_Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  account_id?: InputMaybe<Scalars['String']['input']>;
  additional_token?: InputMaybe<Scalars['String']['input']>;
  buckets?: InputMaybe<Buckets_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Providers_Obj_Rel_Insert_Input>;
  provider_name?: InputMaybe<Providers_Enum>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Cloud_Providers_Max_Fields = {
  access_key_id?: Maybe<Scalars['String']['output']>;
  account_id?: Maybe<Scalars['String']['output']>;
  additional_token?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "cloud_providers" */
export type Cloud_Providers_Max_Order_By = {
  access_key_id?: InputMaybe<Order_By>;
  account_id?: InputMaybe<Order_By>;
  additional_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  secret_access_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cloud_Providers_Min_Fields = {
  access_key_id?: Maybe<Scalars['String']['output']>;
  account_id?: Maybe<Scalars['String']['output']>;
  additional_token?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  secret_access_key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "cloud_providers" */
export type Cloud_Providers_Min_Order_By = {
  access_key_id?: InputMaybe<Order_By>;
  account_id?: InputMaybe<Order_By>;
  additional_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  secret_access_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cloud_providers" */
export type Cloud_Providers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cloud_Providers>;
};

/** input type for inserting object relation for remote table "cloud_providers" */
export type Cloud_Providers_Obj_Rel_Insert_Input = {
  data: Cloud_Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cloud_Providers_On_Conflict>;
};

/** on_conflict condition type for table "cloud_providers" */
export type Cloud_Providers_On_Conflict = {
  constraint: Cloud_Providers_Constraint;
  update_columns?: Array<Cloud_Providers_Update_Column>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "cloud_providers". */
export type Cloud_Providers_Order_By = {
  access_key_id?: InputMaybe<Order_By>;
  account_id?: InputMaybe<Order_By>;
  additional_token?: InputMaybe<Order_By>;
  buckets_aggregate?: InputMaybe<Buckets_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  provider?: InputMaybe<Providers_Order_By>;
  provider_name?: InputMaybe<Order_By>;
  secret_access_key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cloud_providers */
export type Cloud_Providers_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "cloud_providers" */
export enum Cloud_Providers_Select_Column {
  /** column name */
  AccessKeyId = 'access_key_id',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AdditionalToken = 'additional_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  SecretAccessKey = 'secret_access_key',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "cloud_providers" */
export type Cloud_Providers_Set_Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  account_id?: InputMaybe<Scalars['String']['input']>;
  additional_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Providers_Enum>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Cloud_Providers_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "cloud_providers" */
export type Cloud_Providers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cloud_Providers_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "cloud_providers" */
export type Cloud_Providers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cloud_Providers_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "cloud_providers" */
export type Cloud_Providers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "cloud_providers" */
export type Cloud_Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cloud_Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cloud_Providers_Stream_Cursor_Value_Input = {
  access_key_id?: InputMaybe<Scalars['String']['input']>;
  account_id?: InputMaybe<Scalars['String']['input']>;
  additional_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider_name?: InputMaybe<Providers_Enum>;
  secret_access_key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Cloud_Providers_Sum_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "cloud_providers" */
export type Cloud_Providers_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "cloud_providers" */
export enum Cloud_Providers_Update_Column {
  /** column name */
  AccessKeyId = 'access_key_id',
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AdditionalToken = 'additional_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProviderName = 'provider_name',
  /** column name */
  SecretAccessKey = 'secret_access_key',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Cloud_Providers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cloud_Providers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cloud_Providers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cloud_Providers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cloud_Providers_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "cloud_providers" */
export type Cloud_Providers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cloud_Providers_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "cloud_providers" */
export type Cloud_Providers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cloud_Providers_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "cloud_providers" */
export type Cloud_Providers_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "coach_services" */
export type Coach_Services = {
  coach_id: Scalars['Int']['output'];
  /** An object relationship */
  coaches_info: Coaches_Info;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  service: Services;
  service_id: Scalars['Int']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
};

/** aggregated selection of "coach_services" */
export type Coach_Services_Aggregate = {
  aggregate?: Maybe<Coach_Services_Aggregate_Fields>;
  nodes: Array<Coach_Services>;
};

export type Coach_Services_Aggregate_Bool_Exp = {
  count?: InputMaybe<Coach_Services_Aggregate_Bool_Exp_Count>;
};

export type Coach_Services_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Coach_Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coach_Services_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "coach_services" */
export type Coach_Services_Aggregate_Fields = {
  avg?: Maybe<Coach_Services_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Coach_Services_Max_Fields>;
  min?: Maybe<Coach_Services_Min_Fields>;
  stddev?: Maybe<Coach_Services_Stddev_Fields>;
  stddev_pop?: Maybe<Coach_Services_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Coach_Services_Stddev_Samp_Fields>;
  sum?: Maybe<Coach_Services_Sum_Fields>;
  var_pop?: Maybe<Coach_Services_Var_Pop_Fields>;
  var_samp?: Maybe<Coach_Services_Var_Samp_Fields>;
  variance?: Maybe<Coach_Services_Variance_Fields>;
};

/** aggregate fields of "coach_services" */
export type Coach_Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Coach_Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "coach_services" */
export type Coach_Services_Aggregate_Order_By = {
  avg?: InputMaybe<Coach_Services_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Coach_Services_Max_Order_By>;
  min?: InputMaybe<Coach_Services_Min_Order_By>;
  stddev?: InputMaybe<Coach_Services_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Coach_Services_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Coach_Services_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Coach_Services_Sum_Order_By>;
  var_pop?: InputMaybe<Coach_Services_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Coach_Services_Var_Samp_Order_By>;
  variance?: InputMaybe<Coach_Services_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "coach_services" */
export type Coach_Services_Arr_Rel_Insert_Input = {
  data: Array<Coach_Services_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Coach_Services_On_Conflict>;
};

/** aggregate avg on columns */
export type Coach_Services_Avg_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "coach_services" */
export type Coach_Services_Avg_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coach_services". All fields are combined with a logical 'AND'. */
export type Coach_Services_Bool_Exp = {
  _and?: InputMaybe<Array<Coach_Services_Bool_Exp>>;
  _not?: InputMaybe<Coach_Services_Bool_Exp>;
  _or?: InputMaybe<Array<Coach_Services_Bool_Exp>>;
  coach_id?: InputMaybe<Int_Comparison_Exp>;
  coaches_info?: InputMaybe<Coaches_Info_Bool_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  service?: InputMaybe<Services_Bool_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "coach_services" */
export enum Coach_Services_Constraint {
  /** unique or primary key constraint on columns "id" */
  CoachServicesPkey = 'coach_services_pkey',
}

/** input type for incrementing numeric columns in table "coach_services" */
export type Coach_Services_Inc_Input = {
  coach_id?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "coach_services" */
export type Coach_Services_Insert_Input = {
  coach_id?: InputMaybe<Scalars['Int']['input']>;
  coaches_info?: InputMaybe<Coaches_Info_Obj_Rel_Insert_Input>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  service?: InputMaybe<Services_Obj_Rel_Insert_Input>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Coach_Services_Max_Fields = {
  coach_id?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "coach_services" */
export type Coach_Services_Max_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Coach_Services_Min_Fields = {
  coach_id?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "coach_services" */
export type Coach_Services_Min_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "coach_services" */
export type Coach_Services_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Coach_Services>;
};

/** on_conflict condition type for table "coach_services" */
export type Coach_Services_On_Conflict = {
  constraint: Coach_Services_Constraint;
  update_columns?: Array<Coach_Services_Update_Column>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** Ordering options when selecting data from "coach_services". */
export type Coach_Services_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  coaches_info?: InputMaybe<Coaches_Info_Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Services_Order_By>;
  service_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: coach_services */
export type Coach_Services_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "coach_services" */
export enum Coach_Services_Select_Column {
  /** column name */
  CoachId = 'coach_id',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'service_id',
}

/** input type for updating data in table "coach_services" */
export type Coach_Services_Set_Input = {
  coach_id?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Coach_Services_Stddev_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "coach_services" */
export type Coach_Services_Stddev_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Coach_Services_Stddev_Pop_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "coach_services" */
export type Coach_Services_Stddev_Pop_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Coach_Services_Stddev_Samp_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "coach_services" */
export type Coach_Services_Stddev_Samp_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "coach_services" */
export type Coach_Services_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Coach_Services_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Coach_Services_Stream_Cursor_Value_Input = {
  coach_id?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Coach_Services_Sum_Fields = {
  coach_id?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "coach_services" */
export type Coach_Services_Sum_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** update columns of table "coach_services" */
export enum Coach_Services_Update_Column {
  /** column name */
  CoachId = 'coach_id',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'service_id',
}

export type Coach_Services_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Coach_Services_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Coach_Services_Set_Input>;
  /** filter the rows which have to be updated */
  where: Coach_Services_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Coach_Services_Var_Pop_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "coach_services" */
export type Coach_Services_Var_Pop_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Coach_Services_Var_Samp_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "coach_services" */
export type Coach_Services_Var_Samp_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Coach_Services_Variance_Fields = {
  coach_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "coach_services" */
export type Coach_Services_Variance_Order_By = {
  coach_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "coaches_info" */
export type Coaches_Info = {
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  /** An array relationship */
  coach_services: Array<Coach_Services>;
  /** An aggregate relationship */
  coach_services_aggregate: Coach_Services_Aggregate;
  count_score?: Maybe<Scalars['float8']['output']>;
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  payment_account_number: Scalars['String']['output'];
  payment_account_owner: Scalars['String']['output'];
  payment_threshold: Scalars['Int']['output'];
  postalCode: Scalars['String']['output'];
  province: Scalars['String']['output'];
  sdiCode: Scalars['String']['output'];
  service_description?: Maybe<Scalars['String']['output']>;
  single_comment_rate: Scalars['float8']['output'];
  state: Scalars['String']['output'];
  top?: Maybe<Scalars['Boolean']['output']>;
  total_score?: Maybe<Scalars['float8']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  userId: Users;
  user_id: Scalars['bigint']['output'];
  vatNumber: Scalars['String']['output'];
};

/** columns and relationships of "coaches_info" */
export type Coaches_InfoCoach_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** columns and relationships of "coaches_info" */
export type Coaches_InfoCoach_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** aggregated selection of "coaches_info" */
export type Coaches_Info_Aggregate = {
  aggregate?: Maybe<Coaches_Info_Aggregate_Fields>;
  nodes: Array<Coaches_Info>;
};

export type Coaches_Info_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp_Var_Samp>;
};

export type Coaches_Info_Aggregate_Bool_Exp_Avg = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Bool_And = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Corr = {
  arguments: Coaches_Info_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Coaches_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Coaches_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Coaches_Info_Aggregate_Bool_Exp_Max = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Min = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Sum = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Coaches_Info_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coaches_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "coaches_info" */
export type Coaches_Info_Aggregate_Fields = {
  avg?: Maybe<Coaches_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Coaches_Info_Max_Fields>;
  min?: Maybe<Coaches_Info_Min_Fields>;
  stddev?: Maybe<Coaches_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Coaches_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Coaches_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Coaches_Info_Sum_Fields>;
  var_pop?: Maybe<Coaches_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Coaches_Info_Var_Samp_Fields>;
  variance?: Maybe<Coaches_Info_Variance_Fields>;
};

/** aggregate fields of "coaches_info" */
export type Coaches_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "coaches_info" */
export type Coaches_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Coaches_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Coaches_Info_Max_Order_By>;
  min?: InputMaybe<Coaches_Info_Min_Order_By>;
  stddev?: InputMaybe<Coaches_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Coaches_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Coaches_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Coaches_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Coaches_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Coaches_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Coaches_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "coaches_info" */
export type Coaches_Info_Arr_Rel_Insert_Input = {
  data: Array<Coaches_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Coaches_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Coaches_Info_Avg_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "coaches_info" */
export type Coaches_Info_Avg_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coaches_info". All fields are combined with a logical 'AND'. */
export type Coaches_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Coaches_Info_Bool_Exp>>;
  _not?: InputMaybe<Coaches_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Coaches_Info_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  coach_services?: InputMaybe<Coach_Services_Bool_Exp>;
  coach_services_aggregate?: InputMaybe<Coach_Services_Aggregate_Bool_Exp>;
  count_score?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  payment_account_number?: InputMaybe<String_Comparison_Exp>;
  payment_account_owner?: InputMaybe<String_Comparison_Exp>;
  payment_threshold?: InputMaybe<Int_Comparison_Exp>;
  postalCode?: InputMaybe<String_Comparison_Exp>;
  province?: InputMaybe<String_Comparison_Exp>;
  sdiCode?: InputMaybe<String_Comparison_Exp>;
  service_description?: InputMaybe<String_Comparison_Exp>;
  single_comment_rate?: InputMaybe<Float8_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  top?: InputMaybe<Boolean_Comparison_Exp>;
  total_score?: InputMaybe<Float8_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
  vatNumber?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "coaches_info" */
export enum Coaches_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  CoachesInfoPkey = 'coaches_info_pkey',
  /** unique or primary key constraint on columns "vatNumber" */
  CoachesInfoVatNumberKey = 'coaches_info_vatNumber_key',
}

/** input type for incrementing numeric columns in table "coaches_info" */
export type Coaches_Info_Inc_Input = {
  count_score?: InputMaybe<Scalars['float8']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  payment_threshold?: InputMaybe<Scalars['Int']['input']>;
  single_comment_rate?: InputMaybe<Scalars['float8']['input']>;
  total_score?: InputMaybe<Scalars['float8']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "coaches_info" */
export type Coaches_Info_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  coach_services?: InputMaybe<Coach_Services_Arr_Rel_Insert_Input>;
  count_score?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  payment_account_number?: InputMaybe<Scalars['String']['input']>;
  payment_account_owner?: InputMaybe<Scalars['String']['input']>;
  payment_threshold?: InputMaybe<Scalars['Int']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdiCode?: InputMaybe<Scalars['String']['input']>;
  service_description?: InputMaybe<Scalars['String']['input']>;
  single_comment_rate?: InputMaybe<Scalars['float8']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['Boolean']['input']>;
  total_score?: InputMaybe<Scalars['float8']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Coaches_Info_Max_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  count_score?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  payment_account_number?: Maybe<Scalars['String']['output']>;
  payment_account_owner?: Maybe<Scalars['String']['output']>;
  payment_threshold?: Maybe<Scalars['Int']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  sdiCode?: Maybe<Scalars['String']['output']>;
  service_description?: Maybe<Scalars['String']['output']>;
  single_comment_rate?: Maybe<Scalars['float8']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  total_score?: Maybe<Scalars['float8']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "coaches_info" */
export type Coaches_Info_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  count_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_account_number?: InputMaybe<Order_By>;
  payment_account_owner?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  province?: InputMaybe<Order_By>;
  sdiCode?: InputMaybe<Order_By>;
  service_description?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vatNumber?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Coaches_Info_Min_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  count_score?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  payment_account_number?: Maybe<Scalars['String']['output']>;
  payment_account_owner?: Maybe<Scalars['String']['output']>;
  payment_threshold?: Maybe<Scalars['Int']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  sdiCode?: Maybe<Scalars['String']['output']>;
  service_description?: Maybe<Scalars['String']['output']>;
  single_comment_rate?: Maybe<Scalars['float8']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  total_score?: Maybe<Scalars['float8']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "coaches_info" */
export type Coaches_Info_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  count_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_account_number?: InputMaybe<Order_By>;
  payment_account_owner?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  province?: InputMaybe<Order_By>;
  sdiCode?: InputMaybe<Order_By>;
  service_description?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vatNumber?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "coaches_info" */
export type Coaches_Info_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Coaches_Info>;
};

/** input type for inserting object relation for remote table "coaches_info" */
export type Coaches_Info_Obj_Rel_Insert_Input = {
  data: Coaches_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Coaches_Info_On_Conflict>;
};

/** on_conflict condition type for table "coaches_info" */
export type Coaches_Info_On_Conflict = {
  constraint: Coaches_Info_Constraint;
  update_columns?: Array<Coaches_Info_Update_Column>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "coaches_info". */
export type Coaches_Info_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  coach_services_aggregate?: InputMaybe<Coach_Services_Aggregate_Order_By>;
  count_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_account_number?: InputMaybe<Order_By>;
  payment_account_owner?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  province?: InputMaybe<Order_By>;
  sdiCode?: InputMaybe<Order_By>;
  service_description?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  top?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  vatNumber?: InputMaybe<Order_By>;
};

/** primary key columns input for table: coaches_info */
export type Coaches_Info_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "coaches_info" */
export enum Coaches_Info_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CountScore = 'count_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentAccountNumber = 'payment_account_number',
  /** column name */
  PaymentAccountOwner = 'payment_account_owner',
  /** column name */
  PaymentThreshold = 'payment_threshold',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  Province = 'province',
  /** column name */
  SdiCode = 'sdiCode',
  /** column name */
  ServiceDescription = 'service_description',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  State = 'state',
  /** column name */
  Top = 'top',
  /** column name */
  TotalScore = 'total_score',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VatNumber = 'vatNumber',
}

/** select "coaches_info_aggregate_bool_exp_avg_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_bool_and_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Top = 'top',
}

/** select "coaches_info_aggregate_bool_exp_bool_or_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Top = 'top',
}

/** select "coaches_info_aggregate_bool_exp_corr_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_max_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_min_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_sum_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** select "coaches_info_aggregate_bool_exp_var_samp_arguments_columns" columns of table "coaches_info" */
export enum Coaches_Info_Select_Column_Coaches_Info_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  CountScore = 'count_score',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  TotalScore = 'total_score',
}

/** input type for updating data in table "coaches_info" */
export type Coaches_Info_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  count_score?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  payment_account_number?: InputMaybe<Scalars['String']['input']>;
  payment_account_owner?: InputMaybe<Scalars['String']['input']>;
  payment_threshold?: InputMaybe<Scalars['Int']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdiCode?: InputMaybe<Scalars['String']['input']>;
  service_description?: InputMaybe<Scalars['String']['input']>;
  single_comment_rate?: InputMaybe<Scalars['float8']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['Boolean']['input']>;
  total_score?: InputMaybe<Scalars['float8']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Coaches_Info_Stddev_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "coaches_info" */
export type Coaches_Info_Stddev_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Coaches_Info_Stddev_Pop_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "coaches_info" */
export type Coaches_Info_Stddev_Pop_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Coaches_Info_Stddev_Samp_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "coaches_info" */
export type Coaches_Info_Stddev_Samp_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "coaches_info" */
export type Coaches_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Coaches_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Coaches_Info_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  count_score?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  payment_account_number?: InputMaybe<Scalars['String']['input']>;
  payment_account_owner?: InputMaybe<Scalars['String']['input']>;
  payment_threshold?: InputMaybe<Scalars['Int']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdiCode?: InputMaybe<Scalars['String']['input']>;
  service_description?: InputMaybe<Scalars['String']['input']>;
  single_comment_rate?: InputMaybe<Scalars['float8']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['Boolean']['input']>;
  total_score?: InputMaybe<Scalars['float8']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Coaches_Info_Sum_Fields = {
  count_score?: Maybe<Scalars['float8']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  payment_threshold?: Maybe<Scalars['Int']['output']>;
  single_comment_rate?: Maybe<Scalars['float8']['output']>;
  total_score?: Maybe<Scalars['float8']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "coaches_info" */
export type Coaches_Info_Sum_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "coaches_info" */
export enum Coaches_Info_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CountScore = 'count_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentAccountNumber = 'payment_account_number',
  /** column name */
  PaymentAccountOwner = 'payment_account_owner',
  /** column name */
  PaymentThreshold = 'payment_threshold',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  Province = 'province',
  /** column name */
  SdiCode = 'sdiCode',
  /** column name */
  ServiceDescription = 'service_description',
  /** column name */
  SingleCommentRate = 'single_comment_rate',
  /** column name */
  State = 'state',
  /** column name */
  Top = 'top',
  /** column name */
  TotalScore = 'total_score',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VatNumber = 'vatNumber',
}

export type Coaches_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Coaches_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Coaches_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Coaches_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Coaches_Info_Var_Pop_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "coaches_info" */
export type Coaches_Info_Var_Pop_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Coaches_Info_Var_Samp_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "coaches_info" */
export type Coaches_Info_Var_Samp_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Coaches_Info_Variance_Fields = {
  count_score?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  payment_threshold?: Maybe<Scalars['Float']['output']>;
  single_comment_rate?: Maybe<Scalars['Float']['output']>;
  total_score?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "coaches_info" */
export type Coaches_Info_Variance_Order_By = {
  count_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_threshold?: InputMaybe<Order_By>;
  single_comment_rate?: InputMaybe<Order_By>;
  total_score?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "companies" */
export type Companies = {
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: Companies_Aggregate;
  /** An object relationship */
  company?: Maybe<Companies>;
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  email: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  parent_company_id?: Maybe<Scalars['Int']['output']>;
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  province: Scalars['String']['output'];
  sdiCode?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "companies" */
export type CompaniesCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** columns and relationships of "companies" */
export type CompaniesCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** columns and relationships of "companies" */
export type CompaniesDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** columns and relationships of "companies" */
export type CompaniesDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** columns and relationships of "companies" */
export type CompaniesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "companies" */
export type CompaniesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

export type Companies_Aggregate_Bool_Exp = {
  count?: InputMaybe<Companies_Aggregate_Bool_Exp_Count>;
};

export type Companies_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Companies_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  avg?: Maybe<Companies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "companies" */
export type Companies_Aggregate_Order_By = {
  avg?: InputMaybe<Companies_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Companies_Max_Order_By>;
  min?: InputMaybe<Companies_Min_Order_By>;
  stddev?: InputMaybe<Companies_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Companies_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Companies_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Companies_Sum_Order_By>;
  var_pop?: InputMaybe<Companies_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Companies_Var_Samp_Order_By>;
  variance?: InputMaybe<Companies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "companies" */
export type Companies_Arr_Rel_Insert_Input = {
  data: Array<Companies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "companies" */
export type Companies_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Companies_Bool_Exp>>;
  _not?: InputMaybe<Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Companies_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  companies?: InputMaybe<Companies_Bool_Exp>;
  companies_aggregate?: InputMaybe<Companies_Aggregate_Bool_Exp>;
  company?: InputMaybe<Companies_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  parent_company_id?: InputMaybe<Int_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  postalCode?: InputMaybe<String_Comparison_Exp>;
  province?: InputMaybe<String_Comparison_Exp>;
  sdiCode?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  vatNumber?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint on columns "id" */
  CompaniesPkey = 'companies_pkey',
}

/** input type for incrementing numeric columns in table "companies" */
export type Companies_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  parent_company_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companies?: InputMaybe<Companies_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_company_id?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdiCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_company_id?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  sdiCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "companies" */
export type Companies_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  province?: InputMaybe<Order_By>;
  sdiCode?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vatNumber?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_company_id?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  sdiCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vatNumber?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "companies" */
export type Companies_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  province?: InputMaybe<Order_By>;
  sdiCode?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vatNumber?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};

/** on_conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns?: Array<Companies_Update_Column>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "companies". */
export type Companies_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  companies_aggregate?: InputMaybe<Companies_Aggregate_Order_By>;
  company?: InputMaybe<Companies_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  province?: InputMaybe<Order_By>;
  sdiCode?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  vatNumber?: InputMaybe<Order_By>;
};

/** primary key columns input for table: companies */
export type Companies_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentCompanyId = 'parent_company_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  Province = 'province',
  /** column name */
  SdiCode = 'sdiCode',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VatNumber = 'vatNumber',
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_company_id?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdiCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "companies" */
export type Companies_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "companies" */
export type Companies_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "companies" */
export type Companies_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "companies" */
export type Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Companies_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_company_id?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  sdiCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  parent_company_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "companies" */
export type Companies_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentCompanyId = 'parent_company_id',
  /** column name */
  Phone = 'phone',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  Province = 'province',
  /** column name */
  SdiCode = 'sdiCode',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VatNumber = 'vatNumber',
}

export type Companies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Companies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Companies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "companies" */
export type Companies_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "companies" */
export type Companies_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent_company_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "companies" */
export type Companies_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_company_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "device_status" */
export type Device_Status = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "device_status" */
export type Device_StatusDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** columns and relationships of "device_status" */
export type Device_StatusDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** aggregated selection of "device_status" */
export type Device_Status_Aggregate = {
  aggregate?: Maybe<Device_Status_Aggregate_Fields>;
  nodes: Array<Device_Status>;
};

/** aggregate fields of "device_status" */
export type Device_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Device_Status_Max_Fields>;
  min?: Maybe<Device_Status_Min_Fields>;
};

/** aggregate fields of "device_status" */
export type Device_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "device_status". All fields are combined with a logical 'AND'. */
export type Device_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Status_Bool_Exp>>;
  _not?: InputMaybe<Device_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "device_status" */
export enum Device_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  DeviceStatusPkey = 'device_status_pkey',
}

export enum Device_Status_Enum {
  /** ready to recording */
  Active = 'ACTIVE',
  /** device blocked by anomaly */
  Blocked = 'BLOCKED',
  /** configured to be activated */
  Configured = 'CONFIGURED',
  /** not configured */
  Notconfigured = 'NOTCONFIGURED',
  /** unreachable or off */
  Offline = 'OFFLINE',
  /** is recording */
  Recording = 'RECORDING',
}

/** Boolean expression to compare columns of type "device_status_enum". All fields are combined with logical 'AND'. */
export type Device_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Device_Status_Enum>;
  _in?: InputMaybe<Array<Device_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Device_Status_Enum>;
  _nin?: InputMaybe<Array<Device_Status_Enum>>;
};

/** input type for inserting data into table "device_status" */
export type Device_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Device_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Device_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "device_status" */
export type Device_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Device_Status>;
};

/** input type for inserting object relation for remote table "device_status" */
export type Device_Status_Obj_Rel_Insert_Input = {
  data: Device_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Device_Status_On_Conflict>;
};

/** on_conflict condition type for table "device_status" */
export type Device_Status_On_Conflict = {
  constraint: Device_Status_Constraint;
  update_columns?: Array<Device_Status_Update_Column>;
  where?: InputMaybe<Device_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "device_status". */
export type Device_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: device_status */
export type Device_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "device_status" */
export enum Device_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "device_status" */
export type Device_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "device_status" */
export type Device_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "device_status" */
export enum Device_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Device_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Device_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Device_Status_Bool_Exp;
};

/** columns and relationships of "devices" */
export type Devices = {
  /** An object relationship */
  company: Companies;
  company_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['bigint']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  device_status: Device_Status;
  id: Scalars['bigint']['output'];
  location?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: Device_Status_Enum;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  video_recordings_requireds: Array<Video_Recordings_Required>;
  /** An aggregate relationship */
  video_recordings_requireds_aggregate: Video_Recordings_Required_Aggregate;
  /** An array relationship */
  videos: Array<Video>;
  /** An aggregate relationship */
  videos_aggregate: Video_Aggregate;
};

/** columns and relationships of "devices" */
export type DevicesVideo_Recordings_RequiredsArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "devices" */
export type DevicesVideo_Recordings_Requireds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "devices" */
export type DevicesVideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** columns and relationships of "devices" */
export type DevicesVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** aggregated selection of "devices" */
export type Devices_Aggregate = {
  aggregate?: Maybe<Devices_Aggregate_Fields>;
  nodes: Array<Devices>;
};

export type Devices_Aggregate_Bool_Exp = {
  count?: InputMaybe<Devices_Aggregate_Bool_Exp_Count>;
};

export type Devices_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Devices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Devices_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "devices" */
export type Devices_Aggregate_Fields = {
  avg?: Maybe<Devices_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Devices_Max_Fields>;
  min?: Maybe<Devices_Min_Fields>;
  stddev?: Maybe<Devices_Stddev_Fields>;
  stddev_pop?: Maybe<Devices_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Devices_Stddev_Samp_Fields>;
  sum?: Maybe<Devices_Sum_Fields>;
  var_pop?: Maybe<Devices_Var_Pop_Fields>;
  var_samp?: Maybe<Devices_Var_Samp_Fields>;
  variance?: Maybe<Devices_Variance_Fields>;
};

/** aggregate fields of "devices" */
export type Devices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "devices" */
export type Devices_Aggregate_Order_By = {
  avg?: InputMaybe<Devices_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Devices_Max_Order_By>;
  min?: InputMaybe<Devices_Min_Order_By>;
  stddev?: InputMaybe<Devices_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Devices_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Devices_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Devices_Sum_Order_By>;
  var_pop?: InputMaybe<Devices_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Devices_Var_Samp_Order_By>;
  variance?: InputMaybe<Devices_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "devices" */
export type Devices_Arr_Rel_Insert_Input = {
  data: Array<Devices_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};

/** aggregate avg on columns */
export type Devices_Avg_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "devices" */
export type Devices_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "devices". All fields are combined with a logical 'AND'. */
export type Devices_Bool_Exp = {
  _and?: InputMaybe<Array<Devices_Bool_Exp>>;
  _not?: InputMaybe<Devices_Bool_Exp>;
  _or?: InputMaybe<Array<Devices_Bool_Exp>>;
  company?: InputMaybe<Companies_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  device_status?: InputMaybe<Device_Status_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Device_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  video_recordings_requireds?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
  video_recordings_requireds_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Bool_Exp>;
  videos?: InputMaybe<Video_Bool_Exp>;
  videos_aggregate?: InputMaybe<Video_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "devices" */
export enum Devices_Constraint {
  /** unique or primary key constraint on columns "id" */
  DevicesPkey = 'devices_pkey',
}

/** input type for incrementing numeric columns in table "devices" */
export type Devices_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "devices" */
export type Devices_Insert_Input = {
  company?: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  device_status?: InputMaybe<Device_Status_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Device_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  video_recordings_requireds?: InputMaybe<Video_Recordings_Required_Arr_Rel_Insert_Input>;
  videos?: InputMaybe<Video_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Devices_Max_Fields = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "devices" */
export type Devices_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Devices_Min_Fields = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "devices" */
export type Devices_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "devices" */
export type Devices_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices>;
};

/** input type for inserting object relation for remote table "devices" */
export type Devices_Obj_Rel_Insert_Input = {
  data: Devices_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};

/** on_conflict condition type for table "devices" */
export type Devices_On_Conflict = {
  constraint: Devices_Constraint;
  update_columns?: Array<Devices_Update_Column>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** Ordering options when selecting data from "devices". */
export type Devices_Order_By = {
  company?: InputMaybe<Companies_Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  device_status?: InputMaybe<Device_Status_Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  video_recordings_requireds_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Order_By>;
  videos_aggregate?: InputMaybe<Video_Aggregate_Order_By>;
};

/** primary key columns input for table: devices */
export type Devices_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "devices" */
export enum Devices_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "devices" */
export type Devices_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Device_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Devices_Stddev_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "devices" */
export type Devices_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Devices_Stddev_Pop_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "devices" */
export type Devices_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Devices_Stddev_Samp_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "devices" */
export type Devices_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "devices" */
export type Devices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Devices_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Devices_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Device_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Devices_Sum_Fields = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "devices" */
export type Devices_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "devices" */
export enum Devices_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Devices_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Devices_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Devices_Set_Input>;
  /** filter the rows which have to be updated */
  where: Devices_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Devices_Var_Pop_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "devices" */
export type Devices_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Devices_Var_Samp_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "devices" */
export type Devices_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Devices_Variance_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "devices" */
export type Devices_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "features_type" */
export type Features_Type = {
  description: Scalars['String']['output'];
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "features_type" */
export type Features_TypeUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

/** columns and relationships of "features_type" */
export type Features_TypeUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

/** aggregated selection of "features_type" */
export type Features_Type_Aggregate = {
  aggregate?: Maybe<Features_Type_Aggregate_Fields>;
  nodes: Array<Features_Type>;
};

/** aggregate fields of "features_type" */
export type Features_Type_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Features_Type_Max_Fields>;
  min?: Maybe<Features_Type_Min_Fields>;
};

/** aggregate fields of "features_type" */
export type Features_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Features_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "features_type". All fields are combined with a logical 'AND'. */
export type Features_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Features_Type_Bool_Exp>>;
  _not?: InputMaybe<Features_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Features_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  user_features?: InputMaybe<User_Features_Bool_Exp>;
  user_features_aggregate?: InputMaybe<User_Features_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "features_type" */
export enum Features_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  FeaturesTypePkey = 'features_type_pkey',
}

export enum Features_Type_Enum {
  /** Show stats */
  Stats = 'STATS',
}

/** Boolean expression to compare columns of type "features_type_enum". All fields are combined with logical 'AND'. */
export type Features_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Features_Type_Enum>;
  _in?: InputMaybe<Array<Features_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Features_Type_Enum>;
  _nin?: InputMaybe<Array<Features_Type_Enum>>;
};

/** input type for inserting data into table "features_type" */
export type Features_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  user_features?: InputMaybe<User_Features_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Features_Type_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Features_Type_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "features_type" */
export type Features_Type_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Features_Type>;
};

/** input type for inserting object relation for remote table "features_type" */
export type Features_Type_Obj_Rel_Insert_Input = {
  data: Features_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Features_Type_On_Conflict>;
};

/** on_conflict condition type for table "features_type" */
export type Features_Type_On_Conflict = {
  constraint: Features_Type_Constraint;
  update_columns?: Array<Features_Type_Update_Column>;
  where?: InputMaybe<Features_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "features_type". */
export type Features_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  user_features_aggregate?: InputMaybe<User_Features_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: features_type */
export type Features_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "features_type" */
export enum Features_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "features_type" */
export type Features_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "features_type" */
export type Features_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Features_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Features_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "features_type" */
export enum Features_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Features_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Features_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Features_Type_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "interest" */
export type Interest = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  user_interests: Array<User_Interest>;
  /** An aggregate relationship */
  user_interests_aggregate: User_Interest_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "interest" */
export type InterestUser_InterestsArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

/** columns and relationships of "interest" */
export type InterestUser_Interests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

/** aggregated selection of "interest" */
export type Interest_Aggregate = {
  aggregate?: Maybe<Interest_Aggregate_Fields>;
  nodes: Array<Interest>;
};

/** aggregate fields of "interest" */
export type Interest_Aggregate_Fields = {
  avg?: Maybe<Interest_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Interest_Max_Fields>;
  min?: Maybe<Interest_Min_Fields>;
  stddev?: Maybe<Interest_Stddev_Fields>;
  stddev_pop?: Maybe<Interest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Interest_Stddev_Samp_Fields>;
  sum?: Maybe<Interest_Sum_Fields>;
  var_pop?: Maybe<Interest_Var_Pop_Fields>;
  var_samp?: Maybe<Interest_Var_Samp_Fields>;
  variance?: Maybe<Interest_Variance_Fields>;
};

/** aggregate fields of "interest" */
export type Interest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Interest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Interest_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "interest". All fields are combined with a logical 'AND'. */
export type Interest_Bool_Exp = {
  _and?: InputMaybe<Array<Interest_Bool_Exp>>;
  _not?: InputMaybe<Interest_Bool_Exp>;
  _or?: InputMaybe<Array<Interest_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  user_interests?: InputMaybe<User_Interest_Bool_Exp>;
  user_interests_aggregate?: InputMaybe<User_Interest_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "interest" */
export enum Interest_Constraint {
  /** unique or primary key constraint on columns "id" */
  InterestPkey = 'interest_pkey',
}

/** input type for incrementing numeric columns in table "interest" */
export type Interest_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "interest" */
export type Interest_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_interests?: InputMaybe<User_Interest_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Interest_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Interest_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "interest" */
export type Interest_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Interest>;
};

/** input type for inserting object relation for remote table "interest" */
export type Interest_Obj_Rel_Insert_Input = {
  data: Interest_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Interest_On_Conflict>;
};

/** on_conflict condition type for table "interest" */
export type Interest_On_Conflict = {
  constraint: Interest_Constraint;
  update_columns?: Array<Interest_Update_Column>;
  where?: InputMaybe<Interest_Bool_Exp>;
};

/** Ordering options when selecting data from "interest". */
export type Interest_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_interests_aggregate?: InputMaybe<User_Interest_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: interest */
export type Interest_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "interest" */
export enum Interest_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "interest" */
export type Interest_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Interest_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Interest_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Interest_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "interest" */
export type Interest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Interest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Interest_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Interest_Sum_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "interest" */
export enum Interest_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value',
}

export type Interest_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Interest_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Interest_Set_Input>;
  /** filter the rows which have to be updated */
  where: Interest_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Interest_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Interest_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Interest_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  changePassword?: Maybe<ChangePasswordOutput>;
  createHouse: House;
  /** delete data from the table: "audio" */
  delete_audio?: Maybe<Audio_Mutation_Response>;
  /** delete single row from the table: "audio" */
  delete_audio_by_pk?: Maybe<Audio>;
  /** delete data from the table: "buckets" */
  delete_buckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "buckets" */
  delete_buckets_by_pk?: Maybe<Buckets>;
  /** delete data from the table: "cloud_providers" */
  delete_cloud_providers?: Maybe<Cloud_Providers_Mutation_Response>;
  /** delete single row from the table: "cloud_providers" */
  delete_cloud_providers_by_pk?: Maybe<Cloud_Providers>;
  /** delete data from the table: "coach_services" */
  delete_coach_services?: Maybe<Coach_Services_Mutation_Response>;
  /** delete single row from the table: "coach_services" */
  delete_coach_services_by_pk?: Maybe<Coach_Services>;
  /** delete data from the table: "coaches_info" */
  delete_coaches_info?: Maybe<Coaches_Info_Mutation_Response>;
  /** delete single row from the table: "coaches_info" */
  delete_coaches_info_by_pk?: Maybe<Coaches_Info>;
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "device_status" */
  delete_device_status?: Maybe<Device_Status_Mutation_Response>;
  /** delete single row from the table: "device_status" */
  delete_device_status_by_pk?: Maybe<Device_Status>;
  /** delete data from the table: "devices" */
  delete_devices?: Maybe<Devices_Mutation_Response>;
  /** delete single row from the table: "devices" */
  delete_devices_by_pk?: Maybe<Devices>;
  /** delete data from the table: "features_type" */
  delete_features_type?: Maybe<Features_Type_Mutation_Response>;
  /** delete single row from the table: "features_type" */
  delete_features_type_by_pk?: Maybe<Features_Type>;
  /** delete data from the table: "interest" */
  delete_interest?: Maybe<Interest_Mutation_Response>;
  /** delete single row from the table: "interest" */
  delete_interest_by_pk?: Maybe<Interest>;
  /** delete data from the table: "post_comment_visibility_status" */
  delete_post_comment_visibility_status?: Maybe<Post_Comment_Visibility_Status_Mutation_Response>;
  /** delete single row from the table: "post_comment_visibility_status" */
  delete_post_comment_visibility_status_by_pk?: Maybe<Post_Comment_Visibility_Status>;
  /** delete data from the table: "post_comments" */
  delete_post_comments?: Maybe<Post_Comments_Mutation_Response>;
  /** delete single row from the table: "post_comments" */
  delete_post_comments_by_pk?: Maybe<Post_Comments>;
  /** delete data from the table: "post_comments_status" */
  delete_post_comments_status?: Maybe<Post_Comments_Status_Mutation_Response>;
  /** delete single row from the table: "post_comments_status" */
  delete_post_comments_status_by_pk?: Maybe<Post_Comments_Status>;
  /** delete data from the table: "post_status" */
  delete_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** delete single row from the table: "post_status" */
  delete_post_status_by_pk?: Maybe<Post_Status>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "providers" */
  delete_providers?: Maybe<Providers_Mutation_Response>;
  /** delete single row from the table: "providers" */
  delete_providers_by_pk?: Maybe<Providers>;
  /** delete data from the table: "purchase_comment_info" */
  delete_purchase_comment_info?: Maybe<Purchase_Comment_Info_Mutation_Response>;
  /** delete single row from the table: "purchase_comment_info" */
  delete_purchase_comment_info_by_pk?: Maybe<Purchase_Comment_Info>;
  /** delete data from the table: "purchase_comment_status" */
  delete_purchase_comment_status?: Maybe<Purchase_Comment_Status_Mutation_Response>;
  /** delete single row from the table: "purchase_comment_status" */
  delete_purchase_comment_status_by_pk?: Maybe<Purchase_Comment_Status>;
  /** delete data from the table: "saved_posts" */
  delete_saved_posts?: Maybe<Saved_Posts_Mutation_Response>;
  /** delete single row from the table: "saved_posts" */
  delete_saved_posts_by_pk?: Maybe<Saved_Posts>;
  /** delete data from the table: "services" */
  delete_services?: Maybe<Services_Mutation_Response>;
  /** delete single row from the table: "services" */
  delete_services_by_pk?: Maybe<Services>;
  /** delete data from the table: "stich_status" */
  delete_stich_status?: Maybe<Stich_Status_Mutation_Response>;
  /** delete single row from the table: "stich_status" */
  delete_stich_status_by_pk?: Maybe<Stich_Status>;
  /** delete data from the table: "stitches" */
  delete_stitches?: Maybe<Stitches_Mutation_Response>;
  /** delete single row from the table: "stitches" */
  delete_stitches_by_pk?: Maybe<Stitches>;
  /** delete data from the table: "subscription_type" */
  delete_subscription_type?: Maybe<Subscription_Type_Mutation_Response>;
  /** delete single row from the table: "subscription_type" */
  delete_subscription_type_by_pk?: Maybe<Subscription_Type>;
  /** delete data from the table: "user_features" */
  delete_user_features?: Maybe<User_Features_Mutation_Response>;
  /** delete single row from the table: "user_features" */
  delete_user_features_by_pk?: Maybe<User_Features>;
  /** delete data from the table: "user_interest" */
  delete_user_interest?: Maybe<User_Interest_Mutation_Response>;
  /** delete single row from the table: "user_interest" */
  delete_user_interest_by_pk?: Maybe<User_Interest>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "user_status" */
  delete_user_status?: Maybe<User_Status_Mutation_Response>;
  /** delete single row from the table: "user_status" */
  delete_user_status_by_pk?: Maybe<User_Status>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "video" */
  delete_video?: Maybe<Video_Mutation_Response>;
  /** delete single row from the table: "video" */
  delete_video_by_pk?: Maybe<Video>;
  /** delete data from the table: "video_recordings_required" */
  delete_video_recordings_required?: Maybe<Video_Recordings_Required_Mutation_Response>;
  /** delete single row from the table: "video_recordings_required" */
  delete_video_recordings_required_by_pk?: Maybe<Video_Recordings_Required>;
  /** delete data from the table: "video_recordings_status" */
  delete_video_recordings_status?: Maybe<Video_Recordings_Status_Mutation_Response>;
  /** delete single row from the table: "video_recordings_status" */
  delete_video_recordings_status_by_pk?: Maybe<Video_Recordings_Status>;
  generateTempCode?: Maybe<GenerateTempCodeOutput>;
  /** insert data into the table: "audio" */
  insert_audio?: Maybe<Audio_Mutation_Response>;
  /** insert a single row into the table: "audio" */
  insert_audio_one?: Maybe<Audio>;
  /** insert data into the table: "buckets" */
  insert_buckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "buckets" */
  insert_buckets_one?: Maybe<Buckets>;
  /** insert data into the table: "cloud_providers" */
  insert_cloud_providers?: Maybe<Cloud_Providers_Mutation_Response>;
  /** insert a single row into the table: "cloud_providers" */
  insert_cloud_providers_one?: Maybe<Cloud_Providers>;
  /** insert data into the table: "coach_services" */
  insert_coach_services?: Maybe<Coach_Services_Mutation_Response>;
  /** insert a single row into the table: "coach_services" */
  insert_coach_services_one?: Maybe<Coach_Services>;
  /** insert data into the table: "coaches_info" */
  insert_coaches_info?: Maybe<Coaches_Info_Mutation_Response>;
  /** insert a single row into the table: "coaches_info" */
  insert_coaches_info_one?: Maybe<Coaches_Info>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "device_status" */
  insert_device_status?: Maybe<Device_Status_Mutation_Response>;
  /** insert a single row into the table: "device_status" */
  insert_device_status_one?: Maybe<Device_Status>;
  /** insert data into the table: "devices" */
  insert_devices?: Maybe<Devices_Mutation_Response>;
  /** insert a single row into the table: "devices" */
  insert_devices_one?: Maybe<Devices>;
  /** insert data into the table: "features_type" */
  insert_features_type?: Maybe<Features_Type_Mutation_Response>;
  /** insert a single row into the table: "features_type" */
  insert_features_type_one?: Maybe<Features_Type>;
  /** insert data into the table: "interest" */
  insert_interest?: Maybe<Interest_Mutation_Response>;
  /** insert a single row into the table: "interest" */
  insert_interest_one?: Maybe<Interest>;
  /** insert data into the table: "post_comment_visibility_status" */
  insert_post_comment_visibility_status?: Maybe<Post_Comment_Visibility_Status_Mutation_Response>;
  /** insert a single row into the table: "post_comment_visibility_status" */
  insert_post_comment_visibility_status_one?: Maybe<Post_Comment_Visibility_Status>;
  /** insert data into the table: "post_comments" */
  insert_post_comments?: Maybe<Post_Comments_Mutation_Response>;
  /** insert a single row into the table: "post_comments" */
  insert_post_comments_one?: Maybe<Post_Comments>;
  /** insert data into the table: "post_comments_status" */
  insert_post_comments_status?: Maybe<Post_Comments_Status_Mutation_Response>;
  /** insert a single row into the table: "post_comments_status" */
  insert_post_comments_status_one?: Maybe<Post_Comments_Status>;
  /** insert data into the table: "post_status" */
  insert_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** insert a single row into the table: "post_status" */
  insert_post_status_one?: Maybe<Post_Status>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "providers" */
  insert_providers?: Maybe<Providers_Mutation_Response>;
  /** insert a single row into the table: "providers" */
  insert_providers_one?: Maybe<Providers>;
  /** insert data into the table: "purchase_comment_info" */
  insert_purchase_comment_info?: Maybe<Purchase_Comment_Info_Mutation_Response>;
  /** insert a single row into the table: "purchase_comment_info" */
  insert_purchase_comment_info_one?: Maybe<Purchase_Comment_Info>;
  /** insert data into the table: "purchase_comment_status" */
  insert_purchase_comment_status?: Maybe<Purchase_Comment_Status_Mutation_Response>;
  /** insert a single row into the table: "purchase_comment_status" */
  insert_purchase_comment_status_one?: Maybe<Purchase_Comment_Status>;
  /** insert data into the table: "saved_posts" */
  insert_saved_posts?: Maybe<Saved_Posts_Mutation_Response>;
  /** insert a single row into the table: "saved_posts" */
  insert_saved_posts_one?: Maybe<Saved_Posts>;
  /** insert data into the table: "services" */
  insert_services?: Maybe<Services_Mutation_Response>;
  /** insert a single row into the table: "services" */
  insert_services_one?: Maybe<Services>;
  /** insert data into the table: "stich_status" */
  insert_stich_status?: Maybe<Stich_Status_Mutation_Response>;
  /** insert a single row into the table: "stich_status" */
  insert_stich_status_one?: Maybe<Stich_Status>;
  /** insert data into the table: "stitches" */
  insert_stitches?: Maybe<Stitches_Mutation_Response>;
  /** insert a single row into the table: "stitches" */
  insert_stitches_one?: Maybe<Stitches>;
  /** insert data into the table: "subscription_type" */
  insert_subscription_type?: Maybe<Subscription_Type_Mutation_Response>;
  /** insert a single row into the table: "subscription_type" */
  insert_subscription_type_one?: Maybe<Subscription_Type>;
  /** insert data into the table: "user_features" */
  insert_user_features?: Maybe<User_Features_Mutation_Response>;
  /** insert a single row into the table: "user_features" */
  insert_user_features_one?: Maybe<User_Features>;
  /** insert data into the table: "user_interest" */
  insert_user_interest?: Maybe<User_Interest_Mutation_Response>;
  /** insert a single row into the table: "user_interest" */
  insert_user_interest_one?: Maybe<User_Interest>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "user_status" */
  insert_user_status?: Maybe<User_Status_Mutation_Response>;
  /** insert a single row into the table: "user_status" */
  insert_user_status_one?: Maybe<User_Status>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "video" */
  insert_video?: Maybe<Video_Mutation_Response>;
  /** insert a single row into the table: "video" */
  insert_video_one?: Maybe<Video>;
  /** insert data into the table: "video_recordings_required" */
  insert_video_recordings_required?: Maybe<Video_Recordings_Required_Mutation_Response>;
  /** insert a single row into the table: "video_recordings_required" */
  insert_video_recordings_required_one?: Maybe<Video_Recordings_Required>;
  /** insert data into the table: "video_recordings_status" */
  insert_video_recordings_status?: Maybe<Video_Recordings_Status_Mutation_Response>;
  /** insert a single row into the table: "video_recordings_status" */
  insert_video_recordings_status_one?: Maybe<Video_Recordings_Status>;
  login?: Maybe<UsersOutput>;
  removeHouse: House;
  resetPassword?: Maybe<ResetPasswordOutput>;
  signUp?: Maybe<UsersOutput>;
  updateHouse: House;
  /** update data of the table: "audio" */
  update_audio?: Maybe<Audio_Mutation_Response>;
  /** update single row of the table: "audio" */
  update_audio_by_pk?: Maybe<Audio>;
  /** update multiples rows of table: "audio" */
  update_audio_many?: Maybe<Array<Maybe<Audio_Mutation_Response>>>;
  /** update data of the table: "buckets" */
  update_buckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "buckets" */
  update_buckets_by_pk?: Maybe<Buckets>;
  /** update multiples rows of table: "buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "cloud_providers" */
  update_cloud_providers?: Maybe<Cloud_Providers_Mutation_Response>;
  /** update single row of the table: "cloud_providers" */
  update_cloud_providers_by_pk?: Maybe<Cloud_Providers>;
  /** update multiples rows of table: "cloud_providers" */
  update_cloud_providers_many?: Maybe<
    Array<Maybe<Cloud_Providers_Mutation_Response>>
  >;
  /** update data of the table: "coach_services" */
  update_coach_services?: Maybe<Coach_Services_Mutation_Response>;
  /** update single row of the table: "coach_services" */
  update_coach_services_by_pk?: Maybe<Coach_Services>;
  /** update multiples rows of table: "coach_services" */
  update_coach_services_many?: Maybe<
    Array<Maybe<Coach_Services_Mutation_Response>>
  >;
  /** update data of the table: "coaches_info" */
  update_coaches_info?: Maybe<Coaches_Info_Mutation_Response>;
  /** update single row of the table: "coaches_info" */
  update_coaches_info_by_pk?: Maybe<Coaches_Info>;
  /** update multiples rows of table: "coaches_info" */
  update_coaches_info_many?: Maybe<
    Array<Maybe<Coaches_Info_Mutation_Response>>
  >;
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update multiples rows of table: "companies" */
  update_companies_many?: Maybe<Array<Maybe<Companies_Mutation_Response>>>;
  /** update data of the table: "device_status" */
  update_device_status?: Maybe<Device_Status_Mutation_Response>;
  /** update single row of the table: "device_status" */
  update_device_status_by_pk?: Maybe<Device_Status>;
  /** update multiples rows of table: "device_status" */
  update_device_status_many?: Maybe<
    Array<Maybe<Device_Status_Mutation_Response>>
  >;
  /** update data of the table: "devices" */
  update_devices?: Maybe<Devices_Mutation_Response>;
  /** update single row of the table: "devices" */
  update_devices_by_pk?: Maybe<Devices>;
  /** update multiples rows of table: "devices" */
  update_devices_many?: Maybe<Array<Maybe<Devices_Mutation_Response>>>;
  /** update data of the table: "features_type" */
  update_features_type?: Maybe<Features_Type_Mutation_Response>;
  /** update single row of the table: "features_type" */
  update_features_type_by_pk?: Maybe<Features_Type>;
  /** update multiples rows of table: "features_type" */
  update_features_type_many?: Maybe<
    Array<Maybe<Features_Type_Mutation_Response>>
  >;
  /** update data of the table: "interest" */
  update_interest?: Maybe<Interest_Mutation_Response>;
  /** update single row of the table: "interest" */
  update_interest_by_pk?: Maybe<Interest>;
  /** update multiples rows of table: "interest" */
  update_interest_many?: Maybe<Array<Maybe<Interest_Mutation_Response>>>;
  /** update data of the table: "post_comment_visibility_status" */
  update_post_comment_visibility_status?: Maybe<Post_Comment_Visibility_Status_Mutation_Response>;
  /** update single row of the table: "post_comment_visibility_status" */
  update_post_comment_visibility_status_by_pk?: Maybe<Post_Comment_Visibility_Status>;
  /** update multiples rows of table: "post_comment_visibility_status" */
  update_post_comment_visibility_status_many?: Maybe<
    Array<Maybe<Post_Comment_Visibility_Status_Mutation_Response>>
  >;
  /** update data of the table: "post_comments" */
  update_post_comments?: Maybe<Post_Comments_Mutation_Response>;
  /** update single row of the table: "post_comments" */
  update_post_comments_by_pk?: Maybe<Post_Comments>;
  /** update multiples rows of table: "post_comments" */
  update_post_comments_many?: Maybe<
    Array<Maybe<Post_Comments_Mutation_Response>>
  >;
  /** update data of the table: "post_comments_status" */
  update_post_comments_status?: Maybe<Post_Comments_Status_Mutation_Response>;
  /** update single row of the table: "post_comments_status" */
  update_post_comments_status_by_pk?: Maybe<Post_Comments_Status>;
  /** update multiples rows of table: "post_comments_status" */
  update_post_comments_status_many?: Maybe<
    Array<Maybe<Post_Comments_Status_Mutation_Response>>
  >;
  /** update data of the table: "post_status" */
  update_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** update single row of the table: "post_status" */
  update_post_status_by_pk?: Maybe<Post_Status>;
  /** update multiples rows of table: "post_status" */
  update_post_status_many?: Maybe<Array<Maybe<Post_Status_Mutation_Response>>>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>;
  /** update data of the table: "providers" */
  update_providers?: Maybe<Providers_Mutation_Response>;
  /** update single row of the table: "providers" */
  update_providers_by_pk?: Maybe<Providers>;
  /** update multiples rows of table: "providers" */
  update_providers_many?: Maybe<Array<Maybe<Providers_Mutation_Response>>>;
  /** update data of the table: "purchase_comment_info" */
  update_purchase_comment_info?: Maybe<Purchase_Comment_Info_Mutation_Response>;
  /** update single row of the table: "purchase_comment_info" */
  update_purchase_comment_info_by_pk?: Maybe<Purchase_Comment_Info>;
  /** update multiples rows of table: "purchase_comment_info" */
  update_purchase_comment_info_many?: Maybe<
    Array<Maybe<Purchase_Comment_Info_Mutation_Response>>
  >;
  /** update data of the table: "purchase_comment_status" */
  update_purchase_comment_status?: Maybe<Purchase_Comment_Status_Mutation_Response>;
  /** update single row of the table: "purchase_comment_status" */
  update_purchase_comment_status_by_pk?: Maybe<Purchase_Comment_Status>;
  /** update multiples rows of table: "purchase_comment_status" */
  update_purchase_comment_status_many?: Maybe<
    Array<Maybe<Purchase_Comment_Status_Mutation_Response>>
  >;
  /** update data of the table: "saved_posts" */
  update_saved_posts?: Maybe<Saved_Posts_Mutation_Response>;
  /** update single row of the table: "saved_posts" */
  update_saved_posts_by_pk?: Maybe<Saved_Posts>;
  /** update multiples rows of table: "saved_posts" */
  update_saved_posts_many?: Maybe<Array<Maybe<Saved_Posts_Mutation_Response>>>;
  /** update data of the table: "services" */
  update_services?: Maybe<Services_Mutation_Response>;
  /** update single row of the table: "services" */
  update_services_by_pk?: Maybe<Services>;
  /** update multiples rows of table: "services" */
  update_services_many?: Maybe<Array<Maybe<Services_Mutation_Response>>>;
  /** update data of the table: "stich_status" */
  update_stich_status?: Maybe<Stich_Status_Mutation_Response>;
  /** update single row of the table: "stich_status" */
  update_stich_status_by_pk?: Maybe<Stich_Status>;
  /** update multiples rows of table: "stich_status" */
  update_stich_status_many?: Maybe<
    Array<Maybe<Stich_Status_Mutation_Response>>
  >;
  /** update data of the table: "stitches" */
  update_stitches?: Maybe<Stitches_Mutation_Response>;
  /** update single row of the table: "stitches" */
  update_stitches_by_pk?: Maybe<Stitches>;
  /** update multiples rows of table: "stitches" */
  update_stitches_many?: Maybe<Array<Maybe<Stitches_Mutation_Response>>>;
  /** update data of the table: "subscription_type" */
  update_subscription_type?: Maybe<Subscription_Type_Mutation_Response>;
  /** update single row of the table: "subscription_type" */
  update_subscription_type_by_pk?: Maybe<Subscription_Type>;
  /** update multiples rows of table: "subscription_type" */
  update_subscription_type_many?: Maybe<
    Array<Maybe<Subscription_Type_Mutation_Response>>
  >;
  /** update data of the table: "user_features" */
  update_user_features?: Maybe<User_Features_Mutation_Response>;
  /** update single row of the table: "user_features" */
  update_user_features_by_pk?: Maybe<User_Features>;
  /** update multiples rows of table: "user_features" */
  update_user_features_many?: Maybe<
    Array<Maybe<User_Features_Mutation_Response>>
  >;
  /** update data of the table: "user_interest" */
  update_user_interest?: Maybe<User_Interest_Mutation_Response>;
  /** update single row of the table: "user_interest" */
  update_user_interest_by_pk?: Maybe<User_Interest>;
  /** update multiples rows of table: "user_interest" */
  update_user_interest_many?: Maybe<
    Array<Maybe<User_Interest_Mutation_Response>>
  >;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
  /** update data of the table: "user_status" */
  update_user_status?: Maybe<User_Status_Mutation_Response>;
  /** update single row of the table: "user_status" */
  update_user_status_by_pk?: Maybe<User_Status>;
  /** update multiples rows of table: "user_status" */
  update_user_status_many?: Maybe<Array<Maybe<User_Status_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "video" */
  update_video?: Maybe<Video_Mutation_Response>;
  /** update single row of the table: "video" */
  update_video_by_pk?: Maybe<Video>;
  /** update multiples rows of table: "video" */
  update_video_many?: Maybe<Array<Maybe<Video_Mutation_Response>>>;
  /** update data of the table: "video_recordings_required" */
  update_video_recordings_required?: Maybe<Video_Recordings_Required_Mutation_Response>;
  /** update single row of the table: "video_recordings_required" */
  update_video_recordings_required_by_pk?: Maybe<Video_Recordings_Required>;
  /** update multiples rows of table: "video_recordings_required" */
  update_video_recordings_required_many?: Maybe<
    Array<Maybe<Video_Recordings_Required_Mutation_Response>>
  >;
  /** update data of the table: "video_recordings_status" */
  update_video_recordings_status?: Maybe<Video_Recordings_Status_Mutation_Response>;
  /** update single row of the table: "video_recordings_status" */
  update_video_recordings_status_by_pk?: Maybe<Video_Recordings_Status>;
  /** update multiples rows of table: "video_recordings_status" */
  update_video_recordings_status_many?: Maybe<
    Array<Maybe<Video_Recordings_Status_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  user: ChangePasswordInput;
};

/** mutation root */
export type Mutation_RootCreateHouseArgs = {
  createHouseInput: CreateHouseInput;
};

/** mutation root */
export type Mutation_RootDelete_AudioArgs = {
  where: Audio_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Audio_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_BucketsArgs = {
  where: Buckets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Buckets_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Cloud_ProvidersArgs = {
  where: Cloud_Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cloud_Providers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Coach_ServicesArgs = {
  where: Coach_Services_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Coach_Services_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Coaches_InfoArgs = {
  where: Coaches_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Coaches_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Device_StatusArgs = {
  where: Device_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Device_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_DevicesArgs = {
  where: Devices_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Devices_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Features_TypeArgs = {
  where: Features_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Features_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_InterestArgs = {
  where: Interest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Interest_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Post_Comment_Visibility_StatusArgs = {
  where: Post_Comment_Visibility_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Comment_Visibility_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Post_CommentsArgs = {
  where: Post_Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Comments_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Post_Comments_StatusArgs = {
  where: Post_Comments_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Comments_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Post_StatusArgs = {
  where: Post_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ProvidersArgs = {
  where: Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Providers_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Purchase_Comment_InfoArgs = {
  where: Purchase_Comment_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Purchase_Comment_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Purchase_Comment_StatusArgs = {
  where: Purchase_Comment_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Purchase_Comment_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Saved_PostsArgs = {
  where: Saved_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Saved_Posts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ServicesArgs = {
  where: Services_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Services_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Stich_StatusArgs = {
  where: Stich_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Stich_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_StitchesArgs = {
  where: Stitches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Stitches_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Subscription_TypeArgs = {
  where: Subscription_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Subscription_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_User_FeaturesArgs = {
  where: User_Features_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Features_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_User_InterestArgs = {
  where: User_Interest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Interest_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_User_StatusArgs = {
  where: User_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  email: Scalars['String']['input'];
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_VideoArgs = {
  where: Video_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Video_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Video_Recordings_RequiredArgs = {
  where: Video_Recordings_Required_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Video_Recordings_Required_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Video_Recordings_StatusArgs = {
  where: Video_Recordings_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Video_Recordings_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** mutation root */
export type Mutation_RootGenerateTempCodeArgs = {
  userData: GenerateTempCodeInput;
};

/** mutation root */
export type Mutation_RootInsert_AudioArgs = {
  objects: Array<Audio_Insert_Input>;
  on_conflict?: InputMaybe<Audio_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Audio_OneArgs = {
  object: Audio_Insert_Input;
  on_conflict?: InputMaybe<Audio_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Buckets_OneArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cloud_ProvidersArgs = {
  objects: Array<Cloud_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Cloud_Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cloud_Providers_OneArgs = {
  object: Cloud_Providers_Insert_Input;
  on_conflict?: InputMaybe<Cloud_Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Coach_ServicesArgs = {
  objects: Array<Coach_Services_Insert_Input>;
  on_conflict?: InputMaybe<Coach_Services_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Coach_Services_OneArgs = {
  object: Coach_Services_Insert_Input;
  on_conflict?: InputMaybe<Coach_Services_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Coaches_InfoArgs = {
  objects: Array<Coaches_Info_Insert_Input>;
  on_conflict?: InputMaybe<Coaches_Info_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Coaches_Info_OneArgs = {
  object: Coaches_Info_Insert_Input;
  on_conflict?: InputMaybe<Coaches_Info_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_StatusArgs = {
  objects: Array<Device_Status_Insert_Input>;
  on_conflict?: InputMaybe<Device_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Device_Status_OneArgs = {
  object: Device_Status_Insert_Input;
  on_conflict?: InputMaybe<Device_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DevicesArgs = {
  objects: Array<Devices_Insert_Input>;
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Devices_OneArgs = {
  object: Devices_Insert_Input;
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Features_TypeArgs = {
  objects: Array<Features_Type_Insert_Input>;
  on_conflict?: InputMaybe<Features_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Features_Type_OneArgs = {
  object: Features_Type_Insert_Input;
  on_conflict?: InputMaybe<Features_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_InterestArgs = {
  objects: Array<Interest_Insert_Input>;
  on_conflict?: InputMaybe<Interest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Interest_OneArgs = {
  object: Interest_Insert_Input;
  on_conflict?: InputMaybe<Interest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Comment_Visibility_StatusArgs = {
  objects: Array<Post_Comment_Visibility_Status_Insert_Input>;
  on_conflict?: InputMaybe<Post_Comment_Visibility_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Comment_Visibility_Status_OneArgs = {
  object: Post_Comment_Visibility_Status_Insert_Input;
  on_conflict?: InputMaybe<Post_Comment_Visibility_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_CommentsArgs = {
  objects: Array<Post_Comments_Insert_Input>;
  on_conflict?: InputMaybe<Post_Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Comments_OneArgs = {
  object: Post_Comments_Insert_Input;
  on_conflict?: InputMaybe<Post_Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Comments_StatusArgs = {
  objects: Array<Post_Comments_Status_Insert_Input>;
  on_conflict?: InputMaybe<Post_Comments_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Comments_Status_OneArgs = {
  object: Post_Comments_Status_Insert_Input;
  on_conflict?: InputMaybe<Post_Comments_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_StatusArgs = {
  objects: Array<Post_Status_Insert_Input>;
  on_conflict?: InputMaybe<Post_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Status_OneArgs = {
  object: Post_Status_Insert_Input;
  on_conflict?: InputMaybe<Post_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProvidersArgs = {
  objects: Array<Providers_Insert_Input>;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Providers_OneArgs = {
  object: Providers_Insert_Input;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Purchase_Comment_InfoArgs = {
  objects: Array<Purchase_Comment_Info_Insert_Input>;
  on_conflict?: InputMaybe<Purchase_Comment_Info_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Purchase_Comment_Info_OneArgs = {
  object: Purchase_Comment_Info_Insert_Input;
  on_conflict?: InputMaybe<Purchase_Comment_Info_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Purchase_Comment_StatusArgs = {
  objects: Array<Purchase_Comment_Status_Insert_Input>;
  on_conflict?: InputMaybe<Purchase_Comment_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Purchase_Comment_Status_OneArgs = {
  object: Purchase_Comment_Status_Insert_Input;
  on_conflict?: InputMaybe<Purchase_Comment_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Saved_PostsArgs = {
  objects: Array<Saved_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Saved_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Saved_Posts_OneArgs = {
  object: Saved_Posts_Insert_Input;
  on_conflict?: InputMaybe<Saved_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ServicesArgs = {
  objects: Array<Services_Insert_Input>;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Services_OneArgs = {
  object: Services_Insert_Input;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stich_StatusArgs = {
  objects: Array<Stich_Status_Insert_Input>;
  on_conflict?: InputMaybe<Stich_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stich_Status_OneArgs = {
  object: Stich_Status_Insert_Input;
  on_conflict?: InputMaybe<Stich_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StitchesArgs = {
  objects: Array<Stitches_Insert_Input>;
  on_conflict?: InputMaybe<Stitches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stitches_OneArgs = {
  object: Stitches_Insert_Input;
  on_conflict?: InputMaybe<Stitches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Subscription_TypeArgs = {
  objects: Array<Subscription_Type_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Subscription_Type_OneArgs = {
  object: Subscription_Type_Insert_Input;
  on_conflict?: InputMaybe<Subscription_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_FeaturesArgs = {
  objects: Array<User_Features_Insert_Input>;
  on_conflict?: InputMaybe<User_Features_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Features_OneArgs = {
  object: User_Features_Insert_Input;
  on_conflict?: InputMaybe<User_Features_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_InterestArgs = {
  objects: Array<User_Interest_Insert_Input>;
  on_conflict?: InputMaybe<User_Interest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Interest_OneArgs = {
  object: User_Interest_Insert_Input;
  on_conflict?: InputMaybe<User_Interest_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_StatusArgs = {
  objects: Array<User_Status_Insert_Input>;
  on_conflict?: InputMaybe<User_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Status_OneArgs = {
  object: User_Status_Insert_Input;
  on_conflict?: InputMaybe<User_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VideoArgs = {
  objects: Array<Video_Insert_Input>;
  on_conflict?: InputMaybe<Video_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_OneArgs = {
  object: Video_Insert_Input;
  on_conflict?: InputMaybe<Video_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Recordings_RequiredArgs = {
  objects: Array<Video_Recordings_Required_Insert_Input>;
  on_conflict?: InputMaybe<Video_Recordings_Required_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Recordings_Required_OneArgs = {
  object: Video_Recordings_Required_Insert_Input;
  on_conflict?: InputMaybe<Video_Recordings_Required_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Recordings_StatusArgs = {
  objects: Array<Video_Recordings_Status_Insert_Input>;
  on_conflict?: InputMaybe<Video_Recordings_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Recordings_Status_OneArgs = {
  object: Video_Recordings_Status_Insert_Input;
  on_conflict?: InputMaybe<Video_Recordings_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLoginArgs = {
  user: UsersLoginInput;
};

/** mutation root */
export type Mutation_RootRemoveHouseArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  user: ResetPasswordInput;
};

/** mutation root */
export type Mutation_RootSignUpArgs = {
  signupInput?: InputMaybe<SignupInput>;
};

/** mutation root */
export type Mutation_RootUpdateHouseArgs = {
  updateHouseInput: UpdateHouseInput;
};

/** mutation root */
export type Mutation_RootUpdate_AudioArgs = {
  _inc?: InputMaybe<Audio_Inc_Input>;
  _set?: InputMaybe<Audio_Set_Input>;
  where: Audio_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Audio_By_PkArgs = {
  _inc?: InputMaybe<Audio_Inc_Input>;
  _set?: InputMaybe<Audio_Set_Input>;
  pk_columns: Audio_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Audio_ManyArgs = {
  updates: Array<Audio_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Buckets_By_PkArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Cloud_ProvidersArgs = {
  _inc?: InputMaybe<Cloud_Providers_Inc_Input>;
  _set?: InputMaybe<Cloud_Providers_Set_Input>;
  where: Cloud_Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cloud_Providers_By_PkArgs = {
  _inc?: InputMaybe<Cloud_Providers_Inc_Input>;
  _set?: InputMaybe<Cloud_Providers_Set_Input>;
  pk_columns: Cloud_Providers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Cloud_Providers_ManyArgs = {
  updates: Array<Cloud_Providers_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Coach_ServicesArgs = {
  _inc?: InputMaybe<Coach_Services_Inc_Input>;
  _set?: InputMaybe<Coach_Services_Set_Input>;
  where: Coach_Services_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Coach_Services_By_PkArgs = {
  _inc?: InputMaybe<Coach_Services_Inc_Input>;
  _set?: InputMaybe<Coach_Services_Set_Input>;
  pk_columns: Coach_Services_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Coach_Services_ManyArgs = {
  updates: Array<Coach_Services_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Coaches_InfoArgs = {
  _inc?: InputMaybe<Coaches_Info_Inc_Input>;
  _set?: InputMaybe<Coaches_Info_Set_Input>;
  where: Coaches_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Coaches_Info_By_PkArgs = {
  _inc?: InputMaybe<Coaches_Info_Inc_Input>;
  _set?: InputMaybe<Coaches_Info_Set_Input>;
  pk_columns: Coaches_Info_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Coaches_Info_ManyArgs = {
  updates: Array<Coaches_Info_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: InputMaybe<Companies_Inc_Input>;
  _set?: InputMaybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: InputMaybe<Companies_Inc_Input>;
  _set?: InputMaybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Companies_ManyArgs = {
  updates: Array<Companies_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Device_StatusArgs = {
  _set?: InputMaybe<Device_Status_Set_Input>;
  where: Device_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Device_Status_By_PkArgs = {
  _set?: InputMaybe<Device_Status_Set_Input>;
  pk_columns: Device_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Device_Status_ManyArgs = {
  updates: Array<Device_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DevicesArgs = {
  _inc?: InputMaybe<Devices_Inc_Input>;
  _set?: InputMaybe<Devices_Set_Input>;
  where: Devices_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Devices_By_PkArgs = {
  _inc?: InputMaybe<Devices_Inc_Input>;
  _set?: InputMaybe<Devices_Set_Input>;
  pk_columns: Devices_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Devices_ManyArgs = {
  updates: Array<Devices_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Features_TypeArgs = {
  _set?: InputMaybe<Features_Type_Set_Input>;
  where: Features_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Features_Type_By_PkArgs = {
  _set?: InputMaybe<Features_Type_Set_Input>;
  pk_columns: Features_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Features_Type_ManyArgs = {
  updates: Array<Features_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_InterestArgs = {
  _inc?: InputMaybe<Interest_Inc_Input>;
  _set?: InputMaybe<Interest_Set_Input>;
  where: Interest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Interest_By_PkArgs = {
  _inc?: InputMaybe<Interest_Inc_Input>;
  _set?: InputMaybe<Interest_Set_Input>;
  pk_columns: Interest_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Interest_ManyArgs = {
  updates: Array<Interest_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comment_Visibility_StatusArgs = {
  _set?: InputMaybe<Post_Comment_Visibility_Status_Set_Input>;
  where: Post_Comment_Visibility_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comment_Visibility_Status_By_PkArgs = {
  _set?: InputMaybe<Post_Comment_Visibility_Status_Set_Input>;
  pk_columns: Post_Comment_Visibility_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comment_Visibility_Status_ManyArgs = {
  updates: Array<Post_Comment_Visibility_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_CommentsArgs = {
  _inc?: InputMaybe<Post_Comments_Inc_Input>;
  _set?: InputMaybe<Post_Comments_Set_Input>;
  where: Post_Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comments_By_PkArgs = {
  _inc?: InputMaybe<Post_Comments_Inc_Input>;
  _set?: InputMaybe<Post_Comments_Set_Input>;
  pk_columns: Post_Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comments_ManyArgs = {
  updates: Array<Post_Comments_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comments_StatusArgs = {
  _set?: InputMaybe<Post_Comments_Status_Set_Input>;
  where: Post_Comments_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comments_Status_By_PkArgs = {
  _set?: InputMaybe<Post_Comments_Status_Set_Input>;
  pk_columns: Post_Comments_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Comments_Status_ManyArgs = {
  updates: Array<Post_Comments_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_StatusArgs = {
  _set?: InputMaybe<Post_Status_Set_Input>;
  where: Post_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Status_By_PkArgs = {
  _set?: InputMaybe<Post_Status_Set_Input>;
  pk_columns: Post_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Status_ManyArgs = {
  updates: Array<Post_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProvidersArgs = {
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Providers_By_PkArgs = {
  _set?: InputMaybe<Providers_Set_Input>;
  pk_columns: Providers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Providers_ManyArgs = {
  updates: Array<Providers_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Purchase_Comment_InfoArgs = {
  _inc?: InputMaybe<Purchase_Comment_Info_Inc_Input>;
  _set?: InputMaybe<Purchase_Comment_Info_Set_Input>;
  where: Purchase_Comment_Info_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Purchase_Comment_Info_By_PkArgs = {
  _inc?: InputMaybe<Purchase_Comment_Info_Inc_Input>;
  _set?: InputMaybe<Purchase_Comment_Info_Set_Input>;
  pk_columns: Purchase_Comment_Info_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Purchase_Comment_Info_ManyArgs = {
  updates: Array<Purchase_Comment_Info_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Purchase_Comment_StatusArgs = {
  _set?: InputMaybe<Purchase_Comment_Status_Set_Input>;
  where: Purchase_Comment_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Purchase_Comment_Status_By_PkArgs = {
  _set?: InputMaybe<Purchase_Comment_Status_Set_Input>;
  pk_columns: Purchase_Comment_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Purchase_Comment_Status_ManyArgs = {
  updates: Array<Purchase_Comment_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Saved_PostsArgs = {
  _inc?: InputMaybe<Saved_Posts_Inc_Input>;
  _set?: InputMaybe<Saved_Posts_Set_Input>;
  where: Saved_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Saved_Posts_By_PkArgs = {
  _inc?: InputMaybe<Saved_Posts_Inc_Input>;
  _set?: InputMaybe<Saved_Posts_Set_Input>;
  pk_columns: Saved_Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Saved_Posts_ManyArgs = {
  updates: Array<Saved_Posts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ServicesArgs = {
  _inc?: InputMaybe<Services_Inc_Input>;
  _set?: InputMaybe<Services_Set_Input>;
  where: Services_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Services_By_PkArgs = {
  _inc?: InputMaybe<Services_Inc_Input>;
  _set?: InputMaybe<Services_Set_Input>;
  pk_columns: Services_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Services_ManyArgs = {
  updates: Array<Services_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Stich_StatusArgs = {
  _set?: InputMaybe<Stich_Status_Set_Input>;
  where: Stich_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Stich_Status_By_PkArgs = {
  _set?: InputMaybe<Stich_Status_Set_Input>;
  pk_columns: Stich_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Stich_Status_ManyArgs = {
  updates: Array<Stich_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_StitchesArgs = {
  _inc?: InputMaybe<Stitches_Inc_Input>;
  _set?: InputMaybe<Stitches_Set_Input>;
  where: Stitches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Stitches_By_PkArgs = {
  _inc?: InputMaybe<Stitches_Inc_Input>;
  _set?: InputMaybe<Stitches_Set_Input>;
  pk_columns: Stitches_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Stitches_ManyArgs = {
  updates: Array<Stitches_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Subscription_TypeArgs = {
  _set?: InputMaybe<Subscription_Type_Set_Input>;
  where: Subscription_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Subscription_Type_By_PkArgs = {
  _set?: InputMaybe<Subscription_Type_Set_Input>;
  pk_columns: Subscription_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Subscription_Type_ManyArgs = {
  updates: Array<Subscription_Type_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_FeaturesArgs = {
  _inc?: InputMaybe<User_Features_Inc_Input>;
  _set?: InputMaybe<User_Features_Set_Input>;
  where: User_Features_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Features_By_PkArgs = {
  _inc?: InputMaybe<User_Features_Inc_Input>;
  _set?: InputMaybe<User_Features_Set_Input>;
  pk_columns: User_Features_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Features_ManyArgs = {
  updates: Array<User_Features_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_InterestArgs = {
  _inc?: InputMaybe<User_Interest_Inc_Input>;
  _set?: InputMaybe<User_Interest_Set_Input>;
  where: User_Interest_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Interest_By_PkArgs = {
  _inc?: InputMaybe<User_Interest_Inc_Input>;
  _set?: InputMaybe<User_Interest_Set_Input>;
  pk_columns: User_Interest_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Interest_ManyArgs = {
  updates: Array<User_Interest_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: InputMaybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_StatusArgs = {
  _set?: InputMaybe<User_Status_Set_Input>;
  where: User_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Status_By_PkArgs = {
  _set?: InputMaybe<User_Status_Set_Input>;
  pk_columns: User_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Status_ManyArgs = {
  updates: Array<User_Status_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_VideoArgs = {
  _inc?: InputMaybe<Video_Inc_Input>;
  _set?: InputMaybe<Video_Set_Input>;
  where: Video_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Video_By_PkArgs = {
  _inc?: InputMaybe<Video_Inc_Input>;
  _set?: InputMaybe<Video_Set_Input>;
  pk_columns: Video_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Video_ManyArgs = {
  updates: Array<Video_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Recordings_RequiredArgs = {
  _inc?: InputMaybe<Video_Recordings_Required_Inc_Input>;
  _set?: InputMaybe<Video_Recordings_Required_Set_Input>;
  where: Video_Recordings_Required_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Recordings_Required_By_PkArgs = {
  _inc?: InputMaybe<Video_Recordings_Required_Inc_Input>;
  _set?: InputMaybe<Video_Recordings_Required_Set_Input>;
  pk_columns: Video_Recordings_Required_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Recordings_Required_ManyArgs = {
  updates: Array<Video_Recordings_Required_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Recordings_StatusArgs = {
  _set?: InputMaybe<Video_Recordings_Status_Set_Input>;
  where: Video_Recordings_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Recordings_Status_By_PkArgs = {
  _set?: InputMaybe<Video_Recordings_Status_Set_Input>;
  pk_columns: Video_Recordings_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Recordings_Status_ManyArgs = {
  updates: Array<Video_Recordings_Status_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "post_comment_visibility_status" */
export type Post_Comment_Visibility_StatusPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "post_comment_visibility_status" */
export type Post_Comment_Visibility_StatusPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** aggregated selection of "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Aggregate = {
  aggregate?: Maybe<Post_Comment_Visibility_Status_Aggregate_Fields>;
  nodes: Array<Post_Comment_Visibility_Status>;
};

/** aggregate fields of "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Comment_Visibility_Status_Max_Fields>;
  min?: Maybe<Post_Comment_Visibility_Status_Min_Fields>;
};

/** aggregate fields of "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Comment_Visibility_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "post_comment_visibility_status". All fields are combined with a logical 'AND'. */
export type Post_Comment_Visibility_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Comment_Visibility_Status_Bool_Exp>>;
  _not?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Comment_Visibility_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_comment_visibility_status" */
export enum Post_Comment_Visibility_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  VisibilityStatusPkey = 'visibility_status_pkey',
}

export enum Post_Comment_Visibility_Status_Enum {
  Disabled = 'DISABLED',
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

/** Boolean expression to compare columns of type "post_comment_visibility_status_enum". All fields are combined with logical 'AND'. */
export type Post_Comment_Visibility_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Post_Comment_Visibility_Status_Enum>;
  _in?: InputMaybe<Array<Post_Comment_Visibility_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Post_Comment_Visibility_Status_Enum>;
  _nin?: InputMaybe<Array<Post_Comment_Visibility_Status_Enum>>;
};

/** input type for inserting data into table "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Post_Comment_Visibility_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Post_Comment_Visibility_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Comment_Visibility_Status>;
};

/** input type for inserting object relation for remote table "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Obj_Rel_Insert_Input = {
  data: Post_Comment_Visibility_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Comment_Visibility_Status_On_Conflict>;
};

/** on_conflict condition type for table "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_On_Conflict = {
  constraint: Post_Comment_Visibility_Status_Constraint;
  update_columns?: Array<Post_Comment_Visibility_Status_Update_Column>;
  where?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "post_comment_visibility_status". */
export type Post_Comment_Visibility_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_comment_visibility_status */
export type Post_Comment_Visibility_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "post_comment_visibility_status" */
export enum Post_Comment_Visibility_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "post_comment_visibility_status" */
export type Post_Comment_Visibility_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Comment_Visibility_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Comment_Visibility_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "post_comment_visibility_status" */
export enum Post_Comment_Visibility_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Post_Comment_Visibility_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Comment_Visibility_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Comment_Visibility_Status_Bool_Exp;
};

/** columns and relationships of "post_comments" */
export type Post_Comments = {
  /** An object relationship */
  audio?: Maybe<Audio>;
  audio_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  author: Users;
  author_id: Scalars['bigint']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  post?: Maybe<Posts>;
  /** An object relationship */
  post_comment?: Maybe<Post_Comments>;
  /** An object relationship */
  post_comment_visibility_status: Post_Comment_Visibility_Status;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** An object relationship */
  post_comments_status: Post_Comments_Status;
  post_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  purchase_comment_info: Purchase_Comment_Info;
  purchase_comment_info_id: Scalars['bigint']['output'];
  related_comments_id?: Maybe<Scalars['bigint']['output']>;
  status: Post_Comments_Status_Enum;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  userByCreatedBy: Users;
  /** An object relationship */
  video: Video;
  video_id: Scalars['bigint']['output'];
  visibility: Post_Comment_Visibility_Status_Enum;
};

/** columns and relationships of "post_comments" */
export type Post_CommentsPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "post_comments" */
export type Post_CommentsPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** aggregated selection of "post_comments" */
export type Post_Comments_Aggregate = {
  aggregate?: Maybe<Post_Comments_Aggregate_Fields>;
  nodes: Array<Post_Comments>;
};

export type Post_Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Comments_Aggregate_Bool_Exp_Count>;
};

export type Post_Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Post_Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_comments" */
export type Post_Comments_Aggregate_Fields = {
  avg?: Maybe<Post_Comments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Comments_Max_Fields>;
  min?: Maybe<Post_Comments_Min_Fields>;
  stddev?: Maybe<Post_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Comments_Sum_Fields>;
  var_pop?: Maybe<Post_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Comments_Var_Samp_Fields>;
  variance?: Maybe<Post_Comments_Variance_Fields>;
};

/** aggregate fields of "post_comments" */
export type Post_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_comments" */
export type Post_Comments_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Comments_Max_Order_By>;
  min?: InputMaybe<Post_Comments_Min_Order_By>;
  stddev?: InputMaybe<Post_Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Comments_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_comments" */
export type Post_Comments_Arr_Rel_Insert_Input = {
  data: Array<Post_Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Comments_Avg_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "post_comments" */
export type Post_Comments_Avg_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_comments". All fields are combined with a logical 'AND'. */
export type Post_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Comments_Bool_Exp>>;
  _not?: InputMaybe<Post_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Comments_Bool_Exp>>;
  audio?: InputMaybe<Audio_Bool_Exp>;
  audio_id?: InputMaybe<Bigint_Comparison_Exp>;
  author?: InputMaybe<Users_Bool_Exp>;
  author_id?: InputMaybe<Bigint_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_comment?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comment_visibility_status?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  post_comments_status?: InputMaybe<Post_Comments_Status_Bool_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  purchase_comment_info?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  purchase_comment_info_id?: InputMaybe<Bigint_Comparison_Exp>;
  related_comments_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Post_Comments_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userByCreatedBy?: InputMaybe<Users_Bool_Exp>;
  video?: InputMaybe<Video_Bool_Exp>;
  video_id?: InputMaybe<Bigint_Comparison_Exp>;
  visibility?: InputMaybe<Post_Comment_Visibility_Status_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_comments" */
export enum Post_Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostCommentsPkey = 'post_comments_pkey',
}

/** input type for incrementing numeric columns in table "post_comments" */
export type Post_Comments_Inc_Input = {
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  purchase_comment_info_id?: InputMaybe<Scalars['bigint']['input']>;
  related_comments_id?: InputMaybe<Scalars['bigint']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "post_comments" */
export type Post_Comments_Insert_Input = {
  audio?: InputMaybe<Audio_Obj_Rel_Insert_Input>;
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_comment?: InputMaybe<Post_Comments_Obj_Rel_Insert_Input>;
  post_comment_visibility_status?: InputMaybe<Post_Comment_Visibility_Status_Obj_Rel_Insert_Input>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  post_comments_status?: InputMaybe<Post_Comments_Status_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  purchase_comment_info?: InputMaybe<Purchase_Comment_Info_Obj_Rel_Insert_Input>;
  purchase_comment_info_id?: InputMaybe<Scalars['bigint']['input']>;
  related_comments_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Post_Comments_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userByCreatedBy?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  video?: InputMaybe<Video_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
  visibility?: InputMaybe<Post_Comment_Visibility_Status_Enum>;
};

/** aggregate max on columns */
export type Post_Comments_Max_Fields = {
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id?: Maybe<Scalars['bigint']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['bigint']['output']>;
  related_comments_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "post_comments" */
export type Post_Comments_Max_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Comments_Min_Fields = {
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id?: Maybe<Scalars['bigint']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['bigint']['output']>;
  related_comments_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "post_comments" */
export type Post_Comments_Min_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_comments" */
export type Post_Comments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Comments>;
};

/** input type for inserting object relation for remote table "post_comments" */
export type Post_Comments_Obj_Rel_Insert_Input = {
  data: Post_Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Comments_On_Conflict>;
};

/** on_conflict condition type for table "post_comments" */
export type Post_Comments_On_Conflict = {
  constraint: Post_Comments_Constraint;
  update_columns?: Array<Post_Comments_Update_Column>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "post_comments". */
export type Post_Comments_Order_By = {
  audio?: InputMaybe<Audio_Order_By>;
  audio_id?: InputMaybe<Order_By>;
  author?: InputMaybe<Users_Order_By>;
  author_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_comment?: InputMaybe<Post_Comments_Order_By>;
  post_comment_visibility_status?: InputMaybe<Post_Comment_Visibility_Status_Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  post_comments_status?: InputMaybe<Post_Comments_Status_Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info?: InputMaybe<Purchase_Comment_Info_Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userByCreatedBy?: InputMaybe<Users_Order_By>;
  video?: InputMaybe<Video_Order_By>;
  video_id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_comments */
export type Post_Comments_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "post_comments" */
export enum Post_Comments_Select_Column {
  /** column name */
  AudioId = 'audio_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PurchaseCommentInfoId = 'purchase_comment_info_id',
  /** column name */
  RelatedCommentsId = 'related_comments_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id',
  /** column name */
  Visibility = 'visibility',
}

/** input type for updating data in table "post_comments" */
export type Post_Comments_Set_Input = {
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  purchase_comment_info_id?: InputMaybe<Scalars['bigint']['input']>;
  related_comments_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Post_Comments_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
  visibility?: InputMaybe<Post_Comment_Visibility_Status_Enum>;
};

/** columns and relationships of "post_comments_status" */
export type Post_Comments_Status = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "post_comments_status" */
export type Post_Comments_StatusPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "post_comments_status" */
export type Post_Comments_StatusPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** aggregated selection of "post_comments_status" */
export type Post_Comments_Status_Aggregate = {
  aggregate?: Maybe<Post_Comments_Status_Aggregate_Fields>;
  nodes: Array<Post_Comments_Status>;
};

/** aggregate fields of "post_comments_status" */
export type Post_Comments_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Comments_Status_Max_Fields>;
  min?: Maybe<Post_Comments_Status_Min_Fields>;
};

/** aggregate fields of "post_comments_status" */
export type Post_Comments_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Comments_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "post_comments_status". All fields are combined with a logical 'AND'. */
export type Post_Comments_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Comments_Status_Bool_Exp>>;
  _not?: InputMaybe<Post_Comments_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Comments_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_comments_status" */
export enum Post_Comments_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  PostCommentsStatusPkey = 'post_comments_status_pkey',
}

export enum Post_Comments_Status_Enum {
  /** the content has been reported by a user */
  Blocked = 'BLOCKED',
  /** has been commented */
  Completed = 'COMPLETED',
  /** the coach agreed to comment on the video */
  InProgress = 'IN_PROGRESS',
  /** pending verification by an administrator or must be commented on by a coach */
  Pending = 'PENDING',
  /** the comment was rejected */
  Rejected = 'REJECTED',
  /** in the course of verification following a report by a user */
  Review = 'REVIEW',
}

/** Boolean expression to compare columns of type "post_comments_status_enum". All fields are combined with logical 'AND'. */
export type Post_Comments_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Post_Comments_Status_Enum>;
  _in?: InputMaybe<Array<Post_Comments_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Post_Comments_Status_Enum>;
  _nin?: InputMaybe<Array<Post_Comments_Status_Enum>>;
};

/** input type for inserting data into table "post_comments_status" */
export type Post_Comments_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Post_Comments_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Post_Comments_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "post_comments_status" */
export type Post_Comments_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Comments_Status>;
};

/** input type for inserting object relation for remote table "post_comments_status" */
export type Post_Comments_Status_Obj_Rel_Insert_Input = {
  data: Post_Comments_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Comments_Status_On_Conflict>;
};

/** on_conflict condition type for table "post_comments_status" */
export type Post_Comments_Status_On_Conflict = {
  constraint: Post_Comments_Status_Constraint;
  update_columns?: Array<Post_Comments_Status_Update_Column>;
  where?: InputMaybe<Post_Comments_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "post_comments_status". */
export type Post_Comments_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_comments_status */
export type Post_Comments_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "post_comments_status" */
export enum Post_Comments_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "post_comments_status" */
export type Post_Comments_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "post_comments_status" */
export type Post_Comments_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Comments_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Comments_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "post_comments_status" */
export enum Post_Comments_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Post_Comments_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Comments_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Comments_Status_Bool_Exp;
};

/** aggregate stddev on columns */
export type Post_Comments_Stddev_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "post_comments" */
export type Post_Comments_Stddev_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Comments_Stddev_Pop_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "post_comments" */
export type Post_Comments_Stddev_Pop_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Comments_Stddev_Samp_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "post_comments" */
export type Post_Comments_Stddev_Samp_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "post_comments" */
export type Post_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Comments_Stream_Cursor_Value_Input = {
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  purchase_comment_info_id?: InputMaybe<Scalars['bigint']['input']>;
  related_comments_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Post_Comments_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
  visibility?: InputMaybe<Post_Comment_Visibility_Status_Enum>;
};

/** aggregate sum on columns */
export type Post_Comments_Sum_Fields = {
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id?: Maybe<Scalars['bigint']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['bigint']['output']>;
  related_comments_id?: Maybe<Scalars['bigint']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "post_comments" */
export type Post_Comments_Sum_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** update columns of table "post_comments" */
export enum Post_Comments_Update_Column {
  /** column name */
  AudioId = 'audio_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PurchaseCommentInfoId = 'purchase_comment_info_id',
  /** column name */
  RelatedCommentsId = 'related_comments_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id',
  /** column name */
  Visibility = 'visibility',
}

export type Post_Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Comments_Var_Pop_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "post_comments" */
export type Post_Comments_Var_Pop_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Comments_Var_Samp_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "post_comments" */
export type Post_Comments_Var_Samp_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Comments_Variance_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  purchase_comment_info_id?: Maybe<Scalars['Float']['output']>;
  related_comments_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "post_comments" */
export type Post_Comments_Variance_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  purchase_comment_info_id?: InputMaybe<Order_By>;
  related_comments_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "post_status" */
export type Post_Status = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "post_status" */
export type Post_StatusPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "post_status" */
export type Post_StatusPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_status" */
export type Post_Status_Aggregate = {
  aggregate?: Maybe<Post_Status_Aggregate_Fields>;
  nodes: Array<Post_Status>;
};

/** aggregate fields of "post_status" */
export type Post_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Status_Max_Fields>;
  min?: Maybe<Post_Status_Min_Fields>;
};

/** aggregate fields of "post_status" */
export type Post_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "post_status". All fields are combined with a logical 'AND'. */
export type Post_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Status_Bool_Exp>>;
  _not?: InputMaybe<Post_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_status" */
export enum Post_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  PostStatusPkey = 'post_status_pkey',
}

export enum Post_Status_Enum {
  /** the content has been reported by a user */
  Blocked = 'BLOCKED',
  /** the content has been disabled */
  Disabled = 'DISABLED',
  /** removed by admin */
  ForceRemove = 'FORCE_REMOVE',
  /** pending verification by an administrator */
  Pending = 'PENDING',
  /** visible only to the creator user */
  Private = 'PRIVATE',
  /** visible to all */
  Public = 'PUBLIC',
  /** removed by user */
  Remove = 'REMOVE',
  /** the content contains sensitive content */
  Restricted = 'RESTRICTED',
  /** in the course of verification following a report by a user */
  Review = 'REVIEW',
}

/** Boolean expression to compare columns of type "post_status_enum". All fields are combined with logical 'AND'. */
export type Post_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Post_Status_Enum>;
  _in?: InputMaybe<Array<Post_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Post_Status_Enum>;
  _nin?: InputMaybe<Array<Post_Status_Enum>>;
};

/** input type for inserting data into table "post_status" */
export type Post_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Post_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Post_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "post_status" */
export type Post_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Status>;
};

/** input type for inserting object relation for remote table "post_status" */
export type Post_Status_Obj_Rel_Insert_Input = {
  data: Post_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Status_On_Conflict>;
};

/** on_conflict condition type for table "post_status" */
export type Post_Status_On_Conflict = {
  constraint: Post_Status_Constraint;
  update_columns?: Array<Post_Status_Update_Column>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "post_status". */
export type Post_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_status */
export type Post_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "post_status" */
export enum Post_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "post_status" */
export type Post_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "post_status" */
export type Post_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "post_status" */
export enum Post_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Post_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Status_Bool_Exp;
};

/** columns and relationships of "posts" */
export type Posts = {
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** An object relationship */
  post_status: Post_Status;
  required_privacy_content?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  saved_posts: Array<Saved_Posts>;
  /** An aggregate relationship */
  saved_posts_aggregate: Saved_Posts_Aggregate;
  sensitive_content?: Maybe<Scalars['Boolean']['output']>;
  status: Post_Status_Enum;
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  tags: Array<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByUserId: Users;
  user_id: Scalars['Int']['output'];
  /** An object relationship */
  video: Video;
  video_id: Scalars['bigint']['output'];
};

/** columns and relationships of "posts" */
export type PostsPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsSaved_PostsArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsSaved_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

export type Posts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Posts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Posts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Posts_Aggregate_Bool_Exp_Count>;
};

export type Posts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Posts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  post_status?: InputMaybe<Post_Status_Bool_Exp>;
  required_privacy_content?: InputMaybe<Boolean_Comparison_Exp>;
  saved_posts?: InputMaybe<Saved_Posts_Bool_Exp>;
  saved_posts_aggregate?: InputMaybe<Saved_Posts_Aggregate_Bool_Exp>;
  sensitive_content?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Post_Status_Enum_Comparison_Exp>;
  stitches?: InputMaybe<Stitches_Bool_Exp>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Bool_Exp>;
  tags?: InputMaybe<String_Array_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByUserId?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  video?: InputMaybe<Video_Bool_Exp>;
  video_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey',
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  post_status?: InputMaybe<Post_Status_Obj_Rel_Insert_Input>;
  required_privacy_content?: InputMaybe<Scalars['Boolean']['input']>;
  saved_posts?: InputMaybe<Saved_Posts_Arr_Rel_Insert_Input>;
  sensitive_content?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Post_Status_Enum>;
  stitches?: InputMaybe<Stitches_Arr_Rel_Insert_Input>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Video_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  post_status?: InputMaybe<Post_Status_Order_By>;
  required_privacy_content?: InputMaybe<Order_By>;
  saved_posts_aggregate?: InputMaybe<Saved_Posts_Aggregate_Order_By>;
  sensitive_content?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Order_By>;
  tags?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByUserId?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Video_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RequiredPrivacyContent = 'required_privacy_content',
  /** column name */
  SensitiveContent = 'sensitive_content',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id',
}

/** select "posts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "posts" */
export enum Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  RequiredPrivacyContent = 'required_privacy_content',
  /** column name */
  SensitiveContent = 'sensitive_content',
}

/** select "posts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "posts" */
export enum Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  RequiredPrivacyContent = 'required_privacy_content',
  /** column name */
  SensitiveContent = 'sensitive_content',
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  required_privacy_content?: InputMaybe<Scalars['Boolean']['input']>;
  sensitive_content?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Post_Status_Enum>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  required_privacy_content?: InputMaybe<Scalars['Boolean']['input']>;
  sensitive_content?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Post_Status_Enum>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RequiredPrivacyContent = 'required_privacy_content',
  /** column name */
  SensitiveContent = 'sensitive_content',
  /** column name */
  Status = 'status',
  /** column name */
  Tags = 'tags',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id',
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Posts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "providers" */
export type Providers = {
  /** An array relationship */
  buckets: Array<Buckets>;
  /** An aggregate relationship */
  buckets_aggregate: Buckets_Aggregate;
  /** An array relationship */
  cloud_providers: Array<Cloud_Providers>;
  /** An aggregate relationship */
  cloud_providers_aggregate: Cloud_Providers_Aggregate;
  description: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** columns and relationships of "providers" */
export type ProvidersBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** columns and relationships of "providers" */
export type ProvidersBuckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** columns and relationships of "providers" */
export type ProvidersCloud_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cloud_Providers_Order_By>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

/** columns and relationships of "providers" */
export type ProvidersCloud_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cloud_Providers_Order_By>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

/** aggregated selection of "providers" */
export type Providers_Aggregate = {
  aggregate?: Maybe<Providers_Aggregate_Fields>;
  nodes: Array<Providers>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Providers_Max_Fields>;
  min?: Maybe<Providers_Min_Fields>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "providers". All fields are combined with a logical 'AND'. */
export type Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Providers_Bool_Exp>>;
  _not?: InputMaybe<Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Providers_Bool_Exp>>;
  buckets?: InputMaybe<Buckets_Bool_Exp>;
  buckets_aggregate?: InputMaybe<Buckets_Aggregate_Bool_Exp>;
  cloud_providers?: InputMaybe<Cloud_Providers_Bool_Exp>;
  cloud_providers_aggregate?: InputMaybe<Cloud_Providers_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "providers" */
export enum Providers_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProvidersPkey = 'providers_pkey',
}

export enum Providers_Enum {
  /** provider aws */
  Aws = 'AWS',
  /** provider cloudflare */
  Cloudflare = 'CLOUDFLARE',
}

/** Boolean expression to compare columns of type "providers_enum". All fields are combined with logical 'AND'. */
export type Providers_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Providers_Enum>;
  _in?: InputMaybe<Array<Providers_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Providers_Enum>;
  _nin?: InputMaybe<Array<Providers_Enum>>;
};

/** input type for inserting data into table "providers" */
export type Providers_Insert_Input = {
  buckets?: InputMaybe<Buckets_Arr_Rel_Insert_Input>;
  cloud_providers?: InputMaybe<Cloud_Providers_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Providers_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Providers_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "providers" */
export type Providers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Providers>;
};

/** input type for inserting object relation for remote table "providers" */
export type Providers_Obj_Rel_Insert_Input = {
  data: Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** on_conflict condition type for table "providers" */
export type Providers_On_Conflict = {
  constraint: Providers_Constraint;
  update_columns?: Array<Providers_Update_Column>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "providers". */
export type Providers_Order_By = {
  buckets_aggregate?: InputMaybe<Buckets_Aggregate_Order_By>;
  cloud_providers_aggregate?: InputMaybe<Cloud_Providers_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: providers */
export type Providers_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "providers" */
export enum Providers_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "providers" */
export type Providers_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "providers" */
export type Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Providers_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "providers" */
export enum Providers_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Providers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Providers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Providers_Bool_Exp;
};

/** columns and relationships of "purchase_comment_info" */
export type Purchase_Comment_Info = {
  author_invoiced: Scalars['bigint']['output'];
  author_paid: Scalars['bigint']['output'];
  author_reply_comment_date: Scalars['timestamptz']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** An object relationship */
  purchase_comment_status: Purchase_Comment_Status;
  rate: Scalars['float8']['output'];
  status: Purchase_Comment_Status_Enum;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByAuthorPaid: Users;
  /** An object relationship */
  userByCreatedBy?: Maybe<Users>;
};

/** columns and relationships of "purchase_comment_info" */
export type Purchase_Comment_InfoPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "purchase_comment_info" */
export type Purchase_Comment_InfoPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** aggregated selection of "purchase_comment_info" */
export type Purchase_Comment_Info_Aggregate = {
  aggregate?: Maybe<Purchase_Comment_Info_Aggregate_Fields>;
  nodes: Array<Purchase_Comment_Info>;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp_Var_Samp>;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Avg = {
  arguments: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Corr = {
  arguments: Purchase_Comment_Info_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Max = {
  arguments: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Min = {
  arguments: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Sum = {
  arguments: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Purchase_Comment_Info_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "purchase_comment_info" */
export type Purchase_Comment_Info_Aggregate_Fields = {
  avg?: Maybe<Purchase_Comment_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Purchase_Comment_Info_Max_Fields>;
  min?: Maybe<Purchase_Comment_Info_Min_Fields>;
  stddev?: Maybe<Purchase_Comment_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Purchase_Comment_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Purchase_Comment_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Purchase_Comment_Info_Sum_Fields>;
  var_pop?: Maybe<Purchase_Comment_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Purchase_Comment_Info_Var_Samp_Fields>;
  variance?: Maybe<Purchase_Comment_Info_Variance_Fields>;
};

/** aggregate fields of "purchase_comment_info" */
export type Purchase_Comment_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "purchase_comment_info" */
export type Purchase_Comment_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Purchase_Comment_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Purchase_Comment_Info_Max_Order_By>;
  min?: InputMaybe<Purchase_Comment_Info_Min_Order_By>;
  stddev?: InputMaybe<Purchase_Comment_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Purchase_Comment_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Purchase_Comment_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Purchase_Comment_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Purchase_Comment_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Purchase_Comment_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Purchase_Comment_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "purchase_comment_info" */
export type Purchase_Comment_Info_Arr_Rel_Insert_Input = {
  data: Array<Purchase_Comment_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Purchase_Comment_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Purchase_Comment_Info_Avg_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Avg_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "purchase_comment_info". All fields are combined with a logical 'AND'. */
export type Purchase_Comment_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Purchase_Comment_Info_Bool_Exp>>;
  _not?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Purchase_Comment_Info_Bool_Exp>>;
  author_invoiced?: InputMaybe<Bigint_Comparison_Exp>;
  author_paid?: InputMaybe<Bigint_Comparison_Exp>;
  author_reply_comment_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  purchase_comment_status?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
  rate?: InputMaybe<Float8_Comparison_Exp>;
  status?: InputMaybe<Purchase_Comment_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByAuthorPaid?: InputMaybe<Users_Bool_Exp>;
  userByCreatedBy?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "purchase_comment_info" */
export enum Purchase_Comment_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  PurchaseCommentInfoPkey = 'purchase_comment_info_pkey',
}

/** input type for incrementing numeric columns in table "purchase_comment_info" */
export type Purchase_Comment_Info_Inc_Input = {
  author_invoiced?: InputMaybe<Scalars['bigint']['input']>;
  author_paid?: InputMaybe<Scalars['bigint']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  rate?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "purchase_comment_info" */
export type Purchase_Comment_Info_Insert_Input = {
  author_invoiced?: InputMaybe<Scalars['bigint']['input']>;
  author_paid?: InputMaybe<Scalars['bigint']['input']>;
  author_reply_comment_date?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  purchase_comment_status?: InputMaybe<Purchase_Comment_Status_Obj_Rel_Insert_Input>;
  rate?: InputMaybe<Scalars['float8']['input']>;
  status?: InputMaybe<Purchase_Comment_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByAuthorPaid?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByCreatedBy?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Purchase_Comment_Info_Max_Fields = {
  author_invoiced?: Maybe<Scalars['bigint']['output']>;
  author_paid?: Maybe<Scalars['bigint']['output']>;
  author_reply_comment_date?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  rate?: Maybe<Scalars['float8']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Max_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  author_reply_comment_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Purchase_Comment_Info_Min_Fields = {
  author_invoiced?: Maybe<Scalars['bigint']['output']>;
  author_paid?: Maybe<Scalars['bigint']['output']>;
  author_reply_comment_date?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  rate?: Maybe<Scalars['float8']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Min_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  author_reply_comment_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "purchase_comment_info" */
export type Purchase_Comment_Info_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Purchase_Comment_Info>;
};

/** input type for inserting object relation for remote table "purchase_comment_info" */
export type Purchase_Comment_Info_Obj_Rel_Insert_Input = {
  data: Purchase_Comment_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Purchase_Comment_Info_On_Conflict>;
};

/** on_conflict condition type for table "purchase_comment_info" */
export type Purchase_Comment_Info_On_Conflict = {
  constraint: Purchase_Comment_Info_Constraint;
  update_columns?: Array<Purchase_Comment_Info_Update_Column>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "purchase_comment_info". */
export type Purchase_Comment_Info_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  author_reply_comment_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  purchase_comment_status?: InputMaybe<Purchase_Comment_Status_Order_By>;
  rate?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByAuthorPaid?: InputMaybe<Users_Order_By>;
  userByCreatedBy?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: purchase_comment_info */
export type Purchase_Comment_Info_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column {
  /** column name */
  AuthorInvoiced = 'author_invoiced',
  /** column name */
  AuthorPaid = 'author_paid',
  /** column name */
  AuthorReplyCommentDate = 'author_reply_comment_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Rate = 'rate',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "purchase_comment_info_aggregate_bool_exp_avg_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_corr_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_max_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_min_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_sum_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** select "purchase_comment_info_aggregate_bool_exp_var_samp_arguments_columns" columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Select_Column_Purchase_Comment_Info_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Rate = 'rate',
}

/** input type for updating data in table "purchase_comment_info" */
export type Purchase_Comment_Info_Set_Input = {
  author_invoiced?: InputMaybe<Scalars['bigint']['input']>;
  author_paid?: InputMaybe<Scalars['bigint']['input']>;
  author_reply_comment_date?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  rate?: InputMaybe<Scalars['float8']['input']>;
  status?: InputMaybe<Purchase_Comment_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Purchase_Comment_Info_Stddev_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Stddev_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Purchase_Comment_Info_Stddev_Pop_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Stddev_Pop_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Purchase_Comment_Info_Stddev_Samp_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Stddev_Samp_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "purchase_comment_info" */
export type Purchase_Comment_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Purchase_Comment_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Purchase_Comment_Info_Stream_Cursor_Value_Input = {
  author_invoiced?: InputMaybe<Scalars['bigint']['input']>;
  author_paid?: InputMaybe<Scalars['bigint']['input']>;
  author_reply_comment_date?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  rate?: InputMaybe<Scalars['float8']['input']>;
  status?: InputMaybe<Purchase_Comment_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Purchase_Comment_Info_Sum_Fields = {
  author_invoiced?: Maybe<Scalars['bigint']['output']>;
  author_paid?: Maybe<Scalars['bigint']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  rate?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Sum_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** update columns of table "purchase_comment_info" */
export enum Purchase_Comment_Info_Update_Column {
  /** column name */
  AuthorInvoiced = 'author_invoiced',
  /** column name */
  AuthorPaid = 'author_paid',
  /** column name */
  AuthorReplyCommentDate = 'author_reply_comment_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Rate = 'rate',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Purchase_Comment_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Purchase_Comment_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Purchase_Comment_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Purchase_Comment_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Purchase_Comment_Info_Var_Pop_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Var_Pop_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Purchase_Comment_Info_Var_Samp_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Var_Samp_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Purchase_Comment_Info_Variance_Fields = {
  author_invoiced?: Maybe<Scalars['Float']['output']>;
  author_paid?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "purchase_comment_info" */
export type Purchase_Comment_Info_Variance_Order_By = {
  author_invoiced?: InputMaybe<Order_By>;
  author_paid?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** columns and relationships of "purchase_comment_status" */
export type Purchase_Comment_Status = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  purchase_comment_infos: Array<Purchase_Comment_Info>;
  /** An aggregate relationship */
  purchase_comment_infos_aggregate: Purchase_Comment_Info_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "purchase_comment_status" */
export type Purchase_Comment_StatusPurchase_Comment_InfosArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "purchase_comment_status" */
export type Purchase_Comment_StatusPurchase_Comment_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** aggregated selection of "purchase_comment_status" */
export type Purchase_Comment_Status_Aggregate = {
  aggregate?: Maybe<Purchase_Comment_Status_Aggregate_Fields>;
  nodes: Array<Purchase_Comment_Status>;
};

/** aggregate fields of "purchase_comment_status" */
export type Purchase_Comment_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Purchase_Comment_Status_Max_Fields>;
  min?: Maybe<Purchase_Comment_Status_Min_Fields>;
};

/** aggregate fields of "purchase_comment_status" */
export type Purchase_Comment_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Purchase_Comment_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "purchase_comment_status". All fields are combined with a logical 'AND'. */
export type Purchase_Comment_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Purchase_Comment_Status_Bool_Exp>>;
  _not?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Purchase_Comment_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  purchase_comment_infos?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  purchase_comment_infos_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "purchase_comment_status" */
export enum Purchase_Comment_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  PurchaseCommentStatusPkey = 'purchase_comment_status_pkey',
}

export enum Purchase_Comment_Status_Enum {
  Paid = 'PAID',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  RefundedRefused = 'REFUNDED_REFUSED',
  Rejected = 'REJECTED',
  ToBePaid = 'TO_BE_PAID',
}

/** Boolean expression to compare columns of type "purchase_comment_status_enum". All fields are combined with logical 'AND'. */
export type Purchase_Comment_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Purchase_Comment_Status_Enum>;
  _in?: InputMaybe<Array<Purchase_Comment_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Purchase_Comment_Status_Enum>;
  _nin?: InputMaybe<Array<Purchase_Comment_Status_Enum>>;
};

/** input type for inserting data into table "purchase_comment_status" */
export type Purchase_Comment_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  purchase_comment_infos?: InputMaybe<Purchase_Comment_Info_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Purchase_Comment_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Purchase_Comment_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "purchase_comment_status" */
export type Purchase_Comment_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Purchase_Comment_Status>;
};

/** input type for inserting object relation for remote table "purchase_comment_status" */
export type Purchase_Comment_Status_Obj_Rel_Insert_Input = {
  data: Purchase_Comment_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Purchase_Comment_Status_On_Conflict>;
};

/** on_conflict condition type for table "purchase_comment_status" */
export type Purchase_Comment_Status_On_Conflict = {
  constraint: Purchase_Comment_Status_Constraint;
  update_columns?: Array<Purchase_Comment_Status_Update_Column>;
  where?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "purchase_comment_status". */
export type Purchase_Comment_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  purchase_comment_infos_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: purchase_comment_status */
export type Purchase_Comment_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "purchase_comment_status" */
export enum Purchase_Comment_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "purchase_comment_status" */
export type Purchase_Comment_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "purchase_comment_status" */
export type Purchase_Comment_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Purchase_Comment_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Purchase_Comment_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "purchase_comment_status" */
export enum Purchase_Comment_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Purchase_Comment_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Purchase_Comment_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Purchase_Comment_Status_Bool_Exp;
};

export type Query_Root = {
  /** fetch data from the table: "audio" */
  audio: Array<Audio>;
  /** fetch aggregated fields from the table: "audio" */
  audio_aggregate: Audio_Aggregate;
  /** fetch data from the table: "audio" using primary key columns */
  audio_by_pk?: Maybe<Audio>;
  /** An array relationship */
  buckets: Array<Buckets>;
  /** An aggregate relationship */
  buckets_aggregate: Buckets_Aggregate;
  /** fetch data from the table: "buckets" using primary key columns */
  buckets_by_pk?: Maybe<Buckets>;
  /** An array relationship */
  cloud_providers: Array<Cloud_Providers>;
  /** An aggregate relationship */
  cloud_providers_aggregate: Cloud_Providers_Aggregate;
  /** fetch data from the table: "cloud_providers" using primary key columns */
  cloud_providers_by_pk?: Maybe<Cloud_Providers>;
  /** An array relationship */
  coach_services: Array<Coach_Services>;
  /** An aggregate relationship */
  coach_services_aggregate: Coach_Services_Aggregate;
  /** fetch data from the table: "coach_services" using primary key columns */
  coach_services_by_pk?: Maybe<Coach_Services>;
  /** fetch data from the table: "coaches_info" */
  coaches_info: Array<Coaches_Info>;
  /** fetch aggregated fields from the table: "coaches_info" */
  coaches_info_aggregate: Coaches_Info_Aggregate;
  /** fetch data from the table: "coaches_info" using primary key columns */
  coaches_info_by_pk?: Maybe<Coaches_Info>;
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "device_status" */
  device_status: Array<Device_Status>;
  /** fetch aggregated fields from the table: "device_status" */
  device_status_aggregate: Device_Status_Aggregate;
  /** fetch data from the table: "device_status" using primary key columns */
  device_status_by_pk?: Maybe<Device_Status>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table: "features_type" */
  features_type: Array<Features_Type>;
  /** fetch aggregated fields from the table: "features_type" */
  features_type_aggregate: Features_Type_Aggregate;
  /** fetch data from the table: "features_type" using primary key columns */
  features_type_by_pk?: Maybe<Features_Type>;
  getUploadProfileImageAccessInfo?: Maybe<GetUploadProfileImageAccessInfoOutput>;
  house: House;
  /** fetch data from the table: "interest" */
  interest: Array<Interest>;
  /** fetch aggregated fields from the table: "interest" */
  interest_aggregate: Interest_Aggregate;
  /** fetch data from the table: "interest" using primary key columns */
  interest_by_pk?: Maybe<Interest>;
  /** fetch data from the table: "post_comment_visibility_status" */
  post_comment_visibility_status: Array<Post_Comment_Visibility_Status>;
  /** fetch aggregated fields from the table: "post_comment_visibility_status" */
  post_comment_visibility_status_aggregate: Post_Comment_Visibility_Status_Aggregate;
  /** fetch data from the table: "post_comment_visibility_status" using primary key columns */
  post_comment_visibility_status_by_pk?: Maybe<Post_Comment_Visibility_Status>;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<Post_Comments>;
  /** fetch data from the table: "post_comments_status" */
  post_comments_status: Array<Post_Comments_Status>;
  /** fetch aggregated fields from the table: "post_comments_status" */
  post_comments_status_aggregate: Post_Comments_Status_Aggregate;
  /** fetch data from the table: "post_comments_status" using primary key columns */
  post_comments_status_by_pk?: Maybe<Post_Comments_Status>;
  /** fetch data from the table: "post_status" */
  post_status: Array<Post_Status>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: Post_Status_Aggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<Post_Status>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table: "purchase_comment_info" */
  purchase_comment_info: Array<Purchase_Comment_Info>;
  /** fetch aggregated fields from the table: "purchase_comment_info" */
  purchase_comment_info_aggregate: Purchase_Comment_Info_Aggregate;
  /** fetch data from the table: "purchase_comment_info" using primary key columns */
  purchase_comment_info_by_pk?: Maybe<Purchase_Comment_Info>;
  /** fetch data from the table: "purchase_comment_status" */
  purchase_comment_status: Array<Purchase_Comment_Status>;
  /** fetch aggregated fields from the table: "purchase_comment_status" */
  purchase_comment_status_aggregate: Purchase_Comment_Status_Aggregate;
  /** fetch data from the table: "purchase_comment_status" using primary key columns */
  purchase_comment_status_by_pk?: Maybe<Purchase_Comment_Status>;
  refreshToken?: Maybe<RefreshTokenOutput>;
  /** An array relationship */
  saved_posts: Array<Saved_Posts>;
  /** An aggregate relationship */
  saved_posts_aggregate: Saved_Posts_Aggregate;
  /** fetch data from the table: "saved_posts" using primary key columns */
  saved_posts_by_pk?: Maybe<Saved_Posts>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table: "stich_status" */
  stich_status: Array<Stich_Status>;
  /** fetch aggregated fields from the table: "stich_status" */
  stich_status_aggregate: Stich_Status_Aggregate;
  /** fetch data from the table: "stich_status" using primary key columns */
  stich_status_by_pk?: Maybe<Stich_Status>;
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  /** fetch data from the table: "stitches" using primary key columns */
  stitches_by_pk?: Maybe<Stitches>;
  /** fetch data from the table: "subscription_type" */
  subscription_type: Array<Subscription_Type>;
  /** fetch aggregated fields from the table: "subscription_type" */
  subscription_type_aggregate: Subscription_Type_Aggregate;
  /** fetch data from the table: "subscription_type" using primary key columns */
  subscription_type_by_pk?: Maybe<Subscription_Type>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk?: Maybe<User_Features>;
  /** fetch data from the table: "user_interest" */
  user_interest: Array<User_Interest>;
  /** fetch aggregated fields from the table: "user_interest" */
  user_interest_aggregate: User_Interest_Aggregate;
  /** fetch data from the table: "user_interest" using primary key columns */
  user_interest_by_pk?: Maybe<User_Interest>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "user_status" */
  user_status: Array<User_Status>;
  /** fetch aggregated fields from the table: "user_status" */
  user_status_aggregate: User_Status_Aggregate;
  /** fetch data from the table: "user_status" using primary key columns */
  user_status_by_pk?: Maybe<User_Status>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "video" */
  video: Array<Video>;
  /** fetch aggregated fields from the table: "video" */
  video_aggregate: Video_Aggregate;
  /** fetch data from the table: "video" using primary key columns */
  video_by_pk?: Maybe<Video>;
  /** fetch data from the table: "video_recordings_required" */
  video_recordings_required: Array<Video_Recordings_Required>;
  /** fetch aggregated fields from the table: "video_recordings_required" */
  video_recordings_required_aggregate: Video_Recordings_Required_Aggregate;
  /** fetch data from the table: "video_recordings_required" using primary key columns */
  video_recordings_required_by_pk?: Maybe<Video_Recordings_Required>;
  /** fetch data from the table: "video_recordings_status" */
  video_recordings_status: Array<Video_Recordings_Status>;
  /** fetch aggregated fields from the table: "video_recordings_status" */
  video_recordings_status_aggregate: Video_Recordings_Status_Aggregate;
  /** fetch data from the table: "video_recordings_status" using primary key columns */
  video_recordings_status_by_pk?: Maybe<Video_Recordings_Status>;
};

export type Query_RootAudioArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

export type Query_RootAudio_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

export type Query_RootAudio_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Query_RootBuckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Query_RootBuckets_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootCloud_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cloud_Providers_Order_By>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

export type Query_RootCloud_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cloud_Providers_Order_By>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

export type Query_RootCloud_Providers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootCoach_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

export type Query_RootCoach_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

export type Query_RootCoach_Services_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootCoaches_InfoArgs = {
  distinct_on?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coaches_Info_Order_By>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

export type Query_RootCoaches_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coaches_Info_Order_By>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

export type Query_RootCoaches_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootDevice_StatusArgs = {
  distinct_on?: InputMaybe<Array<Device_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Status_Order_By>>;
  where?: InputMaybe<Device_Status_Bool_Exp>;
};

export type Query_RootDevice_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Status_Order_By>>;
  where?: InputMaybe<Device_Status_Bool_Exp>;
};

export type Query_RootDevice_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

export type Query_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

export type Query_RootDevices_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootFeatures_TypeArgs = {
  distinct_on?: InputMaybe<Array<Features_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Type_Order_By>>;
  where?: InputMaybe<Features_Type_Bool_Exp>;
};

export type Query_RootFeatures_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Features_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Type_Order_By>>;
  where?: InputMaybe<Features_Type_Bool_Exp>;
};

export type Query_RootFeatures_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootHouseArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootInterestArgs = {
  distinct_on?: InputMaybe<Array<Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interest_Order_By>>;
  where?: InputMaybe<Interest_Bool_Exp>;
};

export type Query_RootInterest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interest_Order_By>>;
  where?: InputMaybe<Interest_Bool_Exp>;
};

export type Query_RootInterest_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootPost_Comment_Visibility_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Comment_Visibility_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comment_Visibility_Status_Order_By>>;
  where?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
};

export type Query_RootPost_Comment_Visibility_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comment_Visibility_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comment_Visibility_Status_Order_By>>;
  where?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
};

export type Query_RootPost_Comment_Visibility_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

export type Query_RootPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

export type Query_RootPost_Comments_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootPost_Comments_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Status_Order_By>>;
  where?: InputMaybe<Post_Comments_Status_Bool_Exp>;
};

export type Query_RootPost_Comments_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Status_Order_By>>;
  where?: InputMaybe<Post_Comments_Status_Bool_Exp>;
};

export type Query_RootPost_Comments_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootPost_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

export type Query_RootPost_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

export type Query_RootPost_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Query_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Query_RootProviders_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootPurchase_Comment_InfoArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

export type Query_RootPurchase_Comment_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

export type Query_RootPurchase_Comment_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootPurchase_Comment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Status_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
};

export type Query_RootPurchase_Comment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Status_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
};

export type Query_RootPurchase_Comment_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootRefreshTokenArgs = {
  refreshToken: RefreshTokenInput;
};

export type Query_RootSaved_PostsArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

export type Query_RootSaved_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

export type Query_RootSaved_Posts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

export type Query_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

export type Query_RootServices_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootStich_StatusArgs = {
  distinct_on?: InputMaybe<Array<Stich_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stich_Status_Order_By>>;
  where?: InputMaybe<Stich_Status_Bool_Exp>;
};

export type Query_RootStich_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stich_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stich_Status_Order_By>>;
  where?: InputMaybe<Stich_Status_Bool_Exp>;
};

export type Query_RootStich_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

export type Query_RootStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

export type Query_RootStitches_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootSubscription_TypeArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Type_Order_By>>;
  where?: InputMaybe<Subscription_Type_Bool_Exp>;
};

export type Query_RootSubscription_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Type_Order_By>>;
  where?: InputMaybe<Subscription_Type_Bool_Exp>;
};

export type Query_RootSubscription_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

export type Query_RootUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

export type Query_RootUser_Features_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootUser_InterestArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

export type Query_RootUser_Interest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

export type Query_RootUser_Interest_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Query_RootUser_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootUser_StatusArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

export type Query_RootUser_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

export type Query_RootUser_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  email: Scalars['String']['input'];
  id: Scalars['bigint']['input'];
};

export type Query_RootVideoArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

export type Query_RootVideo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

export type Query_RootVideo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootVideo_Recordings_RequiredArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

export type Query_RootVideo_Recordings_Required_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

export type Query_RootVideo_Recordings_Required_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Query_RootVideo_Recordings_StatusArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Status_Order_By>>;
  where?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

export type Query_RootVideo_Recordings_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Status_Order_By>>;
  where?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

export type Query_RootVideo_Recordings_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  tempCode: Scalars['String']['input'];
};

export type ResetPasswordOutput = {
  email: Scalars['String']['output'];
};

/** columns and relationships of "saved_posts" */
export type Saved_Posts = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['bigint']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "saved_posts" */
export type Saved_Posts_Aggregate = {
  aggregate?: Maybe<Saved_Posts_Aggregate_Fields>;
  nodes: Array<Saved_Posts>;
};

export type Saved_Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Saved_Posts_Aggregate_Bool_Exp_Count>;
};

export type Saved_Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Saved_Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "saved_posts" */
export type Saved_Posts_Aggregate_Fields = {
  avg?: Maybe<Saved_Posts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Saved_Posts_Max_Fields>;
  min?: Maybe<Saved_Posts_Min_Fields>;
  stddev?: Maybe<Saved_Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Saved_Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Saved_Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Saved_Posts_Sum_Fields>;
  var_pop?: Maybe<Saved_Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Saved_Posts_Var_Samp_Fields>;
  variance?: Maybe<Saved_Posts_Variance_Fields>;
};

/** aggregate fields of "saved_posts" */
export type Saved_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "saved_posts" */
export type Saved_Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Saved_Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Saved_Posts_Max_Order_By>;
  min?: InputMaybe<Saved_Posts_Min_Order_By>;
  stddev?: InputMaybe<Saved_Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Saved_Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Saved_Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Saved_Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Saved_Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Saved_Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Saved_Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "saved_posts" */
export type Saved_Posts_Arr_Rel_Insert_Input = {
  data: Array<Saved_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Saved_Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Saved_Posts_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "saved_posts" */
export type Saved_Posts_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "saved_posts". All fields are combined with a logical 'AND'. */
export type Saved_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Saved_Posts_Bool_Exp>>;
  _not?: InputMaybe<Saved_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Saved_Posts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "saved_posts" */
export enum Saved_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  SavedPostsPkey = 'saved_posts_pkey',
}

/** input type for incrementing numeric columns in table "saved_posts" */
export type Saved_Posts_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "saved_posts" */
export type Saved_Posts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Saved_Posts_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "saved_posts" */
export type Saved_Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Saved_Posts_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "saved_posts" */
export type Saved_Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "saved_posts" */
export type Saved_Posts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Saved_Posts>;
};

/** on_conflict condition type for table "saved_posts" */
export type Saved_Posts_On_Conflict = {
  constraint: Saved_Posts_Constraint;
  update_columns?: Array<Saved_Posts_Update_Column>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "saved_posts". */
export type Saved_Posts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: saved_posts */
export type Saved_Posts_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "saved_posts" */
export enum Saved_Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "saved_posts" */
export type Saved_Posts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Saved_Posts_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "saved_posts" */
export type Saved_Posts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Saved_Posts_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "saved_posts" */
export type Saved_Posts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Saved_Posts_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "saved_posts" */
export type Saved_Posts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "saved_posts" */
export type Saved_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Saved_Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Saved_Posts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Saved_Posts_Sum_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "saved_posts" */
export type Saved_Posts_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "saved_posts" */
export enum Saved_Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type Saved_Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Saved_Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Saved_Posts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Saved_Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Saved_Posts_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "saved_posts" */
export type Saved_Posts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Saved_Posts_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "saved_posts" */
export type Saved_Posts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Saved_Posts_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "saved_posts" */
export type Saved_Posts_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "services" */
export type Services = {
  /** An array relationship */
  coach_services: Array<Coach_Services>;
  /** An aggregate relationship */
  coach_services_aggregate: Coach_Services_Aggregate;
  id: Scalars['bigint']['output'];
  value: Scalars['String']['output'];
};

/** columns and relationships of "services" */
export type ServicesCoach_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** columns and relationships of "services" */
export type ServicesCoach_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** aggregated selection of "services" */
export type Services_Aggregate = {
  aggregate?: Maybe<Services_Aggregate_Fields>;
  nodes: Array<Services>;
};

/** aggregate fields of "services" */
export type Services_Aggregate_Fields = {
  avg?: Maybe<Services_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Services_Max_Fields>;
  min?: Maybe<Services_Min_Fields>;
  stddev?: Maybe<Services_Stddev_Fields>;
  stddev_pop?: Maybe<Services_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Services_Stddev_Samp_Fields>;
  sum?: Maybe<Services_Sum_Fields>;
  var_pop?: Maybe<Services_Var_Pop_Fields>;
  var_samp?: Maybe<Services_Var_Samp_Fields>;
  variance?: Maybe<Services_Variance_Fields>;
};

/** aggregate fields of "services" */
export type Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Services_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export type Services_Bool_Exp = {
  _and?: InputMaybe<Array<Services_Bool_Exp>>;
  _not?: InputMaybe<Services_Bool_Exp>;
  _or?: InputMaybe<Array<Services_Bool_Exp>>;
  coach_services?: InputMaybe<Coach_Services_Bool_Exp>;
  coach_services_aggregate?: InputMaybe<Coach_Services_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "services" */
export enum Services_Constraint {
  /** unique or primary key constraint on columns "id" */
  ServicesPkey = 'services_pkey',
}

/** input type for incrementing numeric columns in table "services" */
export type Services_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "services" */
export type Services_Insert_Input = {
  coach_services?: InputMaybe<Coach_Services_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Services_Max_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Services_Min_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "services" */
export type Services_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Services>;
};

/** input type for inserting object relation for remote table "services" */
export type Services_Obj_Rel_Insert_Input = {
  data: Services_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Services_On_Conflict>;
};

/** on_conflict condition type for table "services" */
export type Services_On_Conflict = {
  constraint: Services_Constraint;
  update_columns?: Array<Services_Update_Column>;
  where?: InputMaybe<Services_Bool_Exp>;
};

/** Ordering options when selecting data from "services". */
export type Services_Order_By = {
  coach_services_aggregate?: InputMaybe<Coach_Services_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: services */
export type Services_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "services" */
export enum Services_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "services" */
export type Services_Set_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Services_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Services_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Services_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "services" */
export type Services_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Services_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Services_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Services_Sum_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "services" */
export enum Services_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value',
}

export type Services_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Services_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Services_Set_Input>;
  /** filter the rows which have to be updated */
  where: Services_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Services_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Services_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Services_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "stich_status" */
export type Stich_Status = {
  description: Scalars['String']['output'];
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "stich_status" */
export type Stich_StatusStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "stich_status" */
export type Stich_StatusStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** aggregated selection of "stich_status" */
export type Stich_Status_Aggregate = {
  aggregate?: Maybe<Stich_Status_Aggregate_Fields>;
  nodes: Array<Stich_Status>;
};

/** aggregate fields of "stich_status" */
export type Stich_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Stich_Status_Max_Fields>;
  min?: Maybe<Stich_Status_Min_Fields>;
};

/** aggregate fields of "stich_status" */
export type Stich_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stich_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "stich_status". All fields are combined with a logical 'AND'. */
export type Stich_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Stich_Status_Bool_Exp>>;
  _not?: InputMaybe<Stich_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Stich_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  stitches?: InputMaybe<Stitches_Bool_Exp>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stich_status" */
export enum Stich_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  StichStatusPkey = 'stich_status_pkey',
}

export enum Stich_Status_Enum {
  /** the content has been reported by a user */
  Blocked = 'BLOCKED',
  /** the content has been disabled */
  Disabled = 'DISABLED',
  /** pending verification by an administrator */
  Pending = 'PENDING',
  /** visible only to the creator user */
  Private = 'PRIVATE',
  /** visible to all */
  Public = 'PUBLIC',
  /** the content contains sensitive content */
  Restricted = 'RESTRICTED',
  /** in the course of verification following a report by a user */
  Review = 'REVIEW',
}

/** Boolean expression to compare columns of type "stich_status_enum". All fields are combined with logical 'AND'. */
export type Stich_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Stich_Status_Enum>;
  _in?: InputMaybe<Array<Stich_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Stich_Status_Enum>;
  _nin?: InputMaybe<Array<Stich_Status_Enum>>;
};

/** input type for inserting data into table "stich_status" */
export type Stich_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  stitches?: InputMaybe<Stitches_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Stich_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Stich_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "stich_status" */
export type Stich_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Stich_Status>;
};

/** input type for inserting object relation for remote table "stich_status" */
export type Stich_Status_Obj_Rel_Insert_Input = {
  data: Stich_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stich_Status_On_Conflict>;
};

/** on_conflict condition type for table "stich_status" */
export type Stich_Status_On_Conflict = {
  constraint: Stich_Status_Constraint;
  update_columns?: Array<Stich_Status_Update_Column>;
  where?: InputMaybe<Stich_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "stich_status". */
export type Stich_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stich_status */
export type Stich_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "stich_status" */
export enum Stich_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "stich_status" */
export type Stich_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "stich_status" */
export type Stich_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stich_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stich_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "stich_status" */
export enum Stich_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Stich_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stich_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stich_Status_Bool_Exp;
};

/** columns and relationships of "stitches" */
export type Stitches = {
  /** An object relationship */
  audio?: Maybe<Audio>;
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['bigint']['output'];
  status: Stich_Status_Enum;
  /** An object relationship */
  stich_status: Stich_Status;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByCreatedBy: Users;
  /** An object relationship */
  video?: Maybe<Video>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "stitches" */
export type Stitches_Aggregate = {
  aggregate?: Maybe<Stitches_Aggregate_Fields>;
  nodes: Array<Stitches>;
};

export type Stitches_Aggregate_Bool_Exp = {
  count?: InputMaybe<Stitches_Aggregate_Bool_Exp_Count>;
};

export type Stitches_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Stitches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Stitches_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "stitches" */
export type Stitches_Aggregate_Fields = {
  avg?: Maybe<Stitches_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stitches_Max_Fields>;
  min?: Maybe<Stitches_Min_Fields>;
  stddev?: Maybe<Stitches_Stddev_Fields>;
  stddev_pop?: Maybe<Stitches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stitches_Stddev_Samp_Fields>;
  sum?: Maybe<Stitches_Sum_Fields>;
  var_pop?: Maybe<Stitches_Var_Pop_Fields>;
  var_samp?: Maybe<Stitches_Var_Samp_Fields>;
  variance?: Maybe<Stitches_Variance_Fields>;
};

/** aggregate fields of "stitches" */
export type Stitches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stitches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "stitches" */
export type Stitches_Aggregate_Order_By = {
  avg?: InputMaybe<Stitches_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stitches_Max_Order_By>;
  min?: InputMaybe<Stitches_Min_Order_By>;
  stddev?: InputMaybe<Stitches_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stitches_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stitches_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stitches_Sum_Order_By>;
  var_pop?: InputMaybe<Stitches_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stitches_Var_Samp_Order_By>;
  variance?: InputMaybe<Stitches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stitches" */
export type Stitches_Arr_Rel_Insert_Input = {
  data: Array<Stitches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Stitches_On_Conflict>;
};

/** aggregate avg on columns */
export type Stitches_Avg_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "stitches" */
export type Stitches_Avg_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stitches". All fields are combined with a logical 'AND'. */
export type Stitches_Bool_Exp = {
  _and?: InputMaybe<Array<Stitches_Bool_Exp>>;
  _not?: InputMaybe<Stitches_Bool_Exp>;
  _or?: InputMaybe<Array<Stitches_Bool_Exp>>;
  audio?: InputMaybe<Audio_Bool_Exp>;
  audio_id?: InputMaybe<Bigint_Comparison_Exp>;
  author_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Stich_Status_Enum_Comparison_Exp>;
  stich_status?: InputMaybe<Stich_Status_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByCreatedBy?: InputMaybe<Users_Bool_Exp>;
  video?: InputMaybe<Video_Bool_Exp>;
  video_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "stitches" */
export enum Stitches_Constraint {
  /** unique or primary key constraint on columns "id" */
  StitchesPkey = 'stitches_pkey',
}

/** input type for incrementing numeric columns in table "stitches" */
export type Stitches_Inc_Input = {
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "stitches" */
export type Stitches_Insert_Input = {
  audio?: InputMaybe<Audio_Obj_Rel_Insert_Input>;
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Stich_Status_Enum>;
  stich_status?: InputMaybe<Stich_Status_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByCreatedBy?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  video?: InputMaybe<Video_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Stitches_Max_Fields = {
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "stitches" */
export type Stitches_Max_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stitches_Min_Fields = {
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "stitches" */
export type Stitches_Min_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stitches" */
export type Stitches_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Stitches>;
};

/** on_conflict condition type for table "stitches" */
export type Stitches_On_Conflict = {
  constraint: Stitches_Constraint;
  update_columns?: Array<Stitches_Update_Column>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** Ordering options when selecting data from "stitches". */
export type Stitches_Order_By = {
  audio?: InputMaybe<Audio_Order_By>;
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stich_status?: InputMaybe<Stich_Status_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByCreatedBy?: InputMaybe<Users_Order_By>;
  video?: InputMaybe<Video_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stitches */
export type Stitches_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "stitches" */
export enum Stitches_Select_Column {
  /** column name */
  AudioId = 'audio_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id',
}

/** input type for updating data in table "stitches" */
export type Stitches_Set_Input = {
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Stich_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Stitches_Stddev_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "stitches" */
export type Stitches_Stddev_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stitches_Stddev_Pop_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "stitches" */
export type Stitches_Stddev_Pop_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stitches_Stddev_Samp_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "stitches" */
export type Stitches_Stddev_Samp_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "stitches" */
export type Stitches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stitches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stitches_Stream_Cursor_Value_Input = {
  audio_id?: InputMaybe<Scalars['bigint']['input']>;
  author_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  post_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Stich_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Stitches_Sum_Fields = {
  audio_id?: Maybe<Scalars['bigint']['output']>;
  author_id?: Maybe<Scalars['bigint']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  post_id?: Maybe<Scalars['bigint']['output']>;
  video_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "stitches" */
export type Stitches_Sum_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** update columns of table "stitches" */
export enum Stitches_Update_Column {
  /** column name */
  AudioId = 'audio_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id',
}

export type Stitches_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Stitches_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Stitches_Set_Input>;
  /** filter the rows which have to be updated */
  where: Stitches_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Stitches_Var_Pop_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "stitches" */
export type Stitches_Var_Pop_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stitches_Var_Samp_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "stitches" */
export type Stitches_Var_Samp_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stitches_Variance_Fields = {
  audio_id?: Maybe<Scalars['Float']['output']>;
  author_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  post_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "stitches" */
export type Stitches_Variance_Order_By = {
  audio_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  /** fetch data from the table: "audio" */
  audio: Array<Audio>;
  /** fetch aggregated fields from the table: "audio" */
  audio_aggregate: Audio_Aggregate;
  /** fetch data from the table: "audio" using primary key columns */
  audio_by_pk?: Maybe<Audio>;
  /** fetch data from the table in a streaming manner: "audio" */
  audio_stream: Array<Audio>;
  /** An array relationship */
  buckets: Array<Buckets>;
  /** An aggregate relationship */
  buckets_aggregate: Buckets_Aggregate;
  /** fetch data from the table: "buckets" using primary key columns */
  buckets_by_pk?: Maybe<Buckets>;
  /** fetch data from the table in a streaming manner: "buckets" */
  buckets_stream: Array<Buckets>;
  /** An array relationship */
  cloud_providers: Array<Cloud_Providers>;
  /** An aggregate relationship */
  cloud_providers_aggregate: Cloud_Providers_Aggregate;
  /** fetch data from the table: "cloud_providers" using primary key columns */
  cloud_providers_by_pk?: Maybe<Cloud_Providers>;
  /** fetch data from the table in a streaming manner: "cloud_providers" */
  cloud_providers_stream: Array<Cloud_Providers>;
  /** An array relationship */
  coach_services: Array<Coach_Services>;
  /** An aggregate relationship */
  coach_services_aggregate: Coach_Services_Aggregate;
  /** fetch data from the table: "coach_services" using primary key columns */
  coach_services_by_pk?: Maybe<Coach_Services>;
  /** fetch data from the table in a streaming manner: "coach_services" */
  coach_services_stream: Array<Coach_Services>;
  /** fetch data from the table: "coaches_info" */
  coaches_info: Array<Coaches_Info>;
  /** fetch aggregated fields from the table: "coaches_info" */
  coaches_info_aggregate: Coaches_Info_Aggregate;
  /** fetch data from the table: "coaches_info" using primary key columns */
  coaches_info_by_pk?: Maybe<Coaches_Info>;
  /** fetch data from the table in a streaming manner: "coaches_info" */
  coaches_info_stream: Array<Coaches_Info>;
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table in a streaming manner: "companies" */
  companies_stream: Array<Companies>;
  /** fetch data from the table: "device_status" */
  device_status: Array<Device_Status>;
  /** fetch aggregated fields from the table: "device_status" */
  device_status_aggregate: Device_Status_Aggregate;
  /** fetch data from the table: "device_status" using primary key columns */
  device_status_by_pk?: Maybe<Device_Status>;
  /** fetch data from the table in a streaming manner: "device_status" */
  device_status_stream: Array<Device_Status>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table in a streaming manner: "devices" */
  devices_stream: Array<Devices>;
  /** fetch data from the table: "features_type" */
  features_type: Array<Features_Type>;
  /** fetch aggregated fields from the table: "features_type" */
  features_type_aggregate: Features_Type_Aggregate;
  /** fetch data from the table: "features_type" using primary key columns */
  features_type_by_pk?: Maybe<Features_Type>;
  /** fetch data from the table in a streaming manner: "features_type" */
  features_type_stream: Array<Features_Type>;
  /** fetch data from the table: "interest" */
  interest: Array<Interest>;
  /** fetch aggregated fields from the table: "interest" */
  interest_aggregate: Interest_Aggregate;
  /** fetch data from the table: "interest" using primary key columns */
  interest_by_pk?: Maybe<Interest>;
  /** fetch data from the table in a streaming manner: "interest" */
  interest_stream: Array<Interest>;
  /** fetch data from the table: "post_comment_visibility_status" */
  post_comment_visibility_status: Array<Post_Comment_Visibility_Status>;
  /** fetch aggregated fields from the table: "post_comment_visibility_status" */
  post_comment_visibility_status_aggregate: Post_Comment_Visibility_Status_Aggregate;
  /** fetch data from the table: "post_comment_visibility_status" using primary key columns */
  post_comment_visibility_status_by_pk?: Maybe<Post_Comment_Visibility_Status>;
  /** fetch data from the table in a streaming manner: "post_comment_visibility_status" */
  post_comment_visibility_status_stream: Array<Post_Comment_Visibility_Status>;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<Post_Comments>;
  /** fetch data from the table: "post_comments_status" */
  post_comments_status: Array<Post_Comments_Status>;
  /** fetch aggregated fields from the table: "post_comments_status" */
  post_comments_status_aggregate: Post_Comments_Status_Aggregate;
  /** fetch data from the table: "post_comments_status" using primary key columns */
  post_comments_status_by_pk?: Maybe<Post_Comments_Status>;
  /** fetch data from the table in a streaming manner: "post_comments_status" */
  post_comments_status_stream: Array<Post_Comments_Status>;
  /** fetch data from the table in a streaming manner: "post_comments" */
  post_comments_stream: Array<Post_Comments>;
  /** fetch data from the table: "post_status" */
  post_status: Array<Post_Status>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: Post_Status_Aggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<Post_Status>;
  /** fetch data from the table in a streaming manner: "post_status" */
  post_status_stream: Array<Post_Status>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
  /** fetch data from the table: "purchase_comment_info" */
  purchase_comment_info: Array<Purchase_Comment_Info>;
  /** fetch aggregated fields from the table: "purchase_comment_info" */
  purchase_comment_info_aggregate: Purchase_Comment_Info_Aggregate;
  /** fetch data from the table: "purchase_comment_info" using primary key columns */
  purchase_comment_info_by_pk?: Maybe<Purchase_Comment_Info>;
  /** fetch data from the table in a streaming manner: "purchase_comment_info" */
  purchase_comment_info_stream: Array<Purchase_Comment_Info>;
  /** fetch data from the table: "purchase_comment_status" */
  purchase_comment_status: Array<Purchase_Comment_Status>;
  /** fetch aggregated fields from the table: "purchase_comment_status" */
  purchase_comment_status_aggregate: Purchase_Comment_Status_Aggregate;
  /** fetch data from the table: "purchase_comment_status" using primary key columns */
  purchase_comment_status_by_pk?: Maybe<Purchase_Comment_Status>;
  /** fetch data from the table in a streaming manner: "purchase_comment_status" */
  purchase_comment_status_stream: Array<Purchase_Comment_Status>;
  /** An array relationship */
  saved_posts: Array<Saved_Posts>;
  /** An aggregate relationship */
  saved_posts_aggregate: Saved_Posts_Aggregate;
  /** fetch data from the table: "saved_posts" using primary key columns */
  saved_posts_by_pk?: Maybe<Saved_Posts>;
  /** fetch data from the table in a streaming manner: "saved_posts" */
  saved_posts_stream: Array<Saved_Posts>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table in a streaming manner: "services" */
  services_stream: Array<Services>;
  /** fetch data from the table: "stich_status" */
  stich_status: Array<Stich_Status>;
  /** fetch aggregated fields from the table: "stich_status" */
  stich_status_aggregate: Stich_Status_Aggregate;
  /** fetch data from the table: "stich_status" using primary key columns */
  stich_status_by_pk?: Maybe<Stich_Status>;
  /** fetch data from the table in a streaming manner: "stich_status" */
  stich_status_stream: Array<Stich_Status>;
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  /** fetch data from the table: "stitches" using primary key columns */
  stitches_by_pk?: Maybe<Stitches>;
  /** fetch data from the table in a streaming manner: "stitches" */
  stitches_stream: Array<Stitches>;
  /** fetch data from the table: "subscription_type" */
  subscription_type: Array<Subscription_Type>;
  /** fetch aggregated fields from the table: "subscription_type" */
  subscription_type_aggregate: Subscription_Type_Aggregate;
  /** fetch data from the table: "subscription_type" using primary key columns */
  subscription_type_by_pk?: Maybe<Subscription_Type>;
  /** fetch data from the table in a streaming manner: "subscription_type" */
  subscription_type_stream: Array<Subscription_Type>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk?: Maybe<User_Features>;
  /** fetch data from the table in a streaming manner: "user_features" */
  user_features_stream: Array<User_Features>;
  /** fetch data from the table: "user_interest" */
  user_interest: Array<User_Interest>;
  /** fetch aggregated fields from the table: "user_interest" */
  user_interest_aggregate: User_Interest_Aggregate;
  /** fetch data from the table: "user_interest" using primary key columns */
  user_interest_by_pk?: Maybe<User_Interest>;
  /** fetch data from the table in a streaming manner: "user_interest" */
  user_interest_stream: Array<User_Interest>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table: "user_status" */
  user_status: Array<User_Status>;
  /** fetch aggregated fields from the table: "user_status" */
  user_status_aggregate: User_Status_Aggregate;
  /** fetch data from the table: "user_status" using primary key columns */
  user_status_by_pk?: Maybe<User_Status>;
  /** fetch data from the table in a streaming manner: "user_status" */
  user_status_stream: Array<User_Status>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "video" */
  video: Array<Video>;
  /** fetch aggregated fields from the table: "video" */
  video_aggregate: Video_Aggregate;
  /** fetch data from the table: "video" using primary key columns */
  video_by_pk?: Maybe<Video>;
  /** fetch data from the table: "video_recordings_required" */
  video_recordings_required: Array<Video_Recordings_Required>;
  /** fetch aggregated fields from the table: "video_recordings_required" */
  video_recordings_required_aggregate: Video_Recordings_Required_Aggregate;
  /** fetch data from the table: "video_recordings_required" using primary key columns */
  video_recordings_required_by_pk?: Maybe<Video_Recordings_Required>;
  /** fetch data from the table in a streaming manner: "video_recordings_required" */
  video_recordings_required_stream: Array<Video_Recordings_Required>;
  /** fetch data from the table: "video_recordings_status" */
  video_recordings_status: Array<Video_Recordings_Status>;
  /** fetch aggregated fields from the table: "video_recordings_status" */
  video_recordings_status_aggregate: Video_Recordings_Status_Aggregate;
  /** fetch data from the table: "video_recordings_status" using primary key columns */
  video_recordings_status_by_pk?: Maybe<Video_Recordings_Status>;
  /** fetch data from the table in a streaming manner: "video_recordings_status" */
  video_recordings_status_stream: Array<Video_Recordings_Status>;
  /** fetch data from the table in a streaming manner: "video" */
  video_stream: Array<Video>;
};

export type Subscription_RootAudioArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

export type Subscription_RootAudio_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

export type Subscription_RootAudio_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootAudio_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audio_Stream_Cursor_Input>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootBuckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootBuckets_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootCloud_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cloud_Providers_Order_By>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

export type Subscription_RootCloud_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cloud_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cloud_Providers_Order_By>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

export type Subscription_RootCloud_Providers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootCloud_Providers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cloud_Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Cloud_Providers_Bool_Exp>;
};

export type Subscription_RootCoach_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

export type Subscription_RootCoach_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

export type Subscription_RootCoach_Services_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootCoach_Services_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Coach_Services_Stream_Cursor_Input>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

export type Subscription_RootCoaches_InfoArgs = {
  distinct_on?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coaches_Info_Order_By>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

export type Subscription_RootCoaches_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coaches_Info_Order_By>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

export type Subscription_RootCoaches_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootCoaches_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Coaches_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

export type Subscription_RootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootCompanies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

export type Subscription_RootDevice_StatusArgs = {
  distinct_on?: InputMaybe<Array<Device_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Status_Order_By>>;
  where?: InputMaybe<Device_Status_Bool_Exp>;
};

export type Subscription_RootDevice_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Device_Status_Order_By>>;
  where?: InputMaybe<Device_Status_Bool_Exp>;
};

export type Subscription_RootDevice_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootDevice_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Device_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Status_Bool_Exp>;
};

export type Subscription_RootDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

export type Subscription_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

export type Subscription_RootDevices_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootDevices_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Devices_Stream_Cursor_Input>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

export type Subscription_RootFeatures_TypeArgs = {
  distinct_on?: InputMaybe<Array<Features_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Type_Order_By>>;
  where?: InputMaybe<Features_Type_Bool_Exp>;
};

export type Subscription_RootFeatures_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Features_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Type_Order_By>>;
  where?: InputMaybe<Features_Type_Bool_Exp>;
};

export type Subscription_RootFeatures_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootFeatures_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Features_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Features_Type_Bool_Exp>;
};

export type Subscription_RootInterestArgs = {
  distinct_on?: InputMaybe<Array<Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interest_Order_By>>;
  where?: InputMaybe<Interest_Bool_Exp>;
};

export type Subscription_RootInterest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interest_Order_By>>;
  where?: InputMaybe<Interest_Bool_Exp>;
};

export type Subscription_RootInterest_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootInterest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Interest_Stream_Cursor_Input>>;
  where?: InputMaybe<Interest_Bool_Exp>;
};

export type Subscription_RootPost_Comment_Visibility_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Comment_Visibility_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comment_Visibility_Status_Order_By>>;
  where?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
};

export type Subscription_RootPost_Comment_Visibility_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comment_Visibility_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comment_Visibility_Status_Order_By>>;
  where?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
};

export type Subscription_RootPost_Comment_Visibility_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootPost_Comment_Visibility_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Comment_Visibility_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Comment_Visibility_Status_Bool_Exp>;
};

export type Subscription_RootPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

export type Subscription_RootPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

export type Subscription_RootPost_Comments_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootPost_Comments_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Status_Order_By>>;
  where?: InputMaybe<Post_Comments_Status_Bool_Exp>;
};

export type Subscription_RootPost_Comments_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Status_Order_By>>;
  where?: InputMaybe<Post_Comments_Status_Bool_Exp>;
};

export type Subscription_RootPost_Comments_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootPost_Comments_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Comments_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Comments_Status_Bool_Exp>;
};

export type Subscription_RootPost_Comments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

export type Subscription_RootPost_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

export type Subscription_RootPost_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

export type Subscription_RootPost_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootPost_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootProviders_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootPurchase_Comment_InfoArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

export type Subscription_RootPurchase_Comment_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

export type Subscription_RootPurchase_Comment_Info_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootPurchase_Comment_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Purchase_Comment_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

export type Subscription_RootPurchase_Comment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Status_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
};

export type Subscription_RootPurchase_Comment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Status_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
};

export type Subscription_RootPurchase_Comment_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootPurchase_Comment_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Purchase_Comment_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Purchase_Comment_Status_Bool_Exp>;
};

export type Subscription_RootSaved_PostsArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

export type Subscription_RootSaved_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

export type Subscription_RootSaved_Posts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootSaved_Posts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Saved_Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

export type Subscription_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

export type Subscription_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

export type Subscription_RootServices_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootServices_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Services_Stream_Cursor_Input>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

export type Subscription_RootStich_StatusArgs = {
  distinct_on?: InputMaybe<Array<Stich_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stich_Status_Order_By>>;
  where?: InputMaybe<Stich_Status_Bool_Exp>;
};

export type Subscription_RootStich_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stich_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stich_Status_Order_By>>;
  where?: InputMaybe<Stich_Status_Bool_Exp>;
};

export type Subscription_RootStich_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootStich_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stich_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Stich_Status_Bool_Exp>;
};

export type Subscription_RootStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

export type Subscription_RootStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

export type Subscription_RootStitches_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootStitches_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stitches_Stream_Cursor_Input>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

export type Subscription_RootSubscription_TypeArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Type_Order_By>>;
  where?: InputMaybe<Subscription_Type_Bool_Exp>;
};

export type Subscription_RootSubscription_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Type_Order_By>>;
  where?: InputMaybe<Subscription_Type_Bool_Exp>;
};

export type Subscription_RootSubscription_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootSubscription_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscription_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscription_Type_Bool_Exp>;
};

export type Subscription_RootUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

export type Subscription_RootUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

export type Subscription_RootUser_Features_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootUser_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Features_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

export type Subscription_RootUser_InterestArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

export type Subscription_RootUser_Interest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

export type Subscription_RootUser_Interest_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootUser_Interest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Interest_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_StatusArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

export type Subscription_RootUser_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

export type Subscription_RootUser_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootUser_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  email: Scalars['String']['input'];
  id: Scalars['bigint']['input'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootVideoArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

export type Subscription_RootVideo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

export type Subscription_RootVideo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootVideo_Recordings_RequiredArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

export type Subscription_RootVideo_Recordings_Required_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

export type Subscription_RootVideo_Recordings_Required_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_RootVideo_Recordings_Required_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Recordings_Required_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

export type Subscription_RootVideo_Recordings_StatusArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Status_Order_By>>;
  where?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

export type Subscription_RootVideo_Recordings_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Status_Order_By>>;
  where?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

export type Subscription_RootVideo_Recordings_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

export type Subscription_RootVideo_Recordings_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Recordings_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

export type Subscription_RootVideo_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** columns and relationships of "subscription_type" */
export type Subscription_Type = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "subscription_type" */
export type Subscription_TypeUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "subscription_type" */
export type Subscription_TypeUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "subscription_type" */
export type Subscription_Type_Aggregate = {
  aggregate?: Maybe<Subscription_Type_Aggregate_Fields>;
  nodes: Array<Subscription_Type>;
};

/** aggregate fields of "subscription_type" */
export type Subscription_Type_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Subscription_Type_Max_Fields>;
  min?: Maybe<Subscription_Type_Min_Fields>;
};

/** aggregate fields of "subscription_type" */
export type Subscription_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "subscription_type". All fields are combined with a logical 'AND'. */
export type Subscription_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Type_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscription_type" */
export enum Subscription_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  SubscriptionTypePkey = 'subscription_type_pkey',
}

export enum Subscription_Type_Enum {
  Basic = 'BASIC',
  FreeCoach = 'FREE_COACH',
  Premium = 'PREMIUM',
}

/** Boolean expression to compare columns of type "subscription_type_enum". All fields are combined with logical 'AND'. */
export type Subscription_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Subscription_Type_Enum>;
  _in?: InputMaybe<Array<Subscription_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Subscription_Type_Enum>;
  _nin?: InputMaybe<Array<Subscription_Type_Enum>>;
};

/** input type for inserting data into table "subscription_type" */
export type Subscription_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Subscription_Type_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Subscription_Type_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "subscription_type" */
export type Subscription_Type_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription_Type>;
};

/** input type for inserting object relation for remote table "subscription_type" */
export type Subscription_Type_Obj_Rel_Insert_Input = {
  data: Subscription_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscription_Type_On_Conflict>;
};

/** on_conflict condition type for table "subscription_type" */
export type Subscription_Type_On_Conflict = {
  constraint: Subscription_Type_Constraint;
  update_columns?: Array<Subscription_Type_Update_Column>;
  where?: InputMaybe<Subscription_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "subscription_type". */
export type Subscription_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscription_type */
export type Subscription_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "subscription_type" */
export enum Subscription_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "subscription_type" */
export type Subscription_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "subscription_type" */
export type Subscription_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscription_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscription_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "subscription_type" */
export enum Subscription_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Subscription_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscription_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscription_Type_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_features" */
export type User_Features = {
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['bigint']['output'];
  feature: Features_Type_Enum;
  /** An object relationship */
  features_type: Features_Type;
  id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

export type User_Features_ActionType = {
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['bigint']['output'];
  feature: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "user_features" */
export type User_Features_Aggregate = {
  aggregate?: Maybe<User_Features_Aggregate_Fields>;
  nodes: Array<User_Features>;
};

export type User_Features_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Features_Aggregate_Bool_Exp_Count>;
};

export type User_Features_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Features_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_features" */
export type User_Features_Aggregate_Fields = {
  avg?: Maybe<User_Features_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Features_Max_Fields>;
  min?: Maybe<User_Features_Min_Fields>;
  stddev?: Maybe<User_Features_Stddev_Fields>;
  stddev_pop?: Maybe<User_Features_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Features_Stddev_Samp_Fields>;
  sum?: Maybe<User_Features_Sum_Fields>;
  var_pop?: Maybe<User_Features_Var_Pop_Fields>;
  var_samp?: Maybe<User_Features_Var_Samp_Fields>;
  variance?: Maybe<User_Features_Variance_Fields>;
};

/** aggregate fields of "user_features" */
export type User_Features_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_features" */
export type User_Features_Aggregate_Order_By = {
  avg?: InputMaybe<User_Features_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Features_Max_Order_By>;
  min?: InputMaybe<User_Features_Min_Order_By>;
  stddev?: InputMaybe<User_Features_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Features_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Features_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Features_Sum_Order_By>;
  var_pop?: InputMaybe<User_Features_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Features_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Features_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_features" */
export type User_Features_Arr_Rel_Insert_Input = {
  data: Array<User_Features_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Features_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Features_Avg_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_features" */
export type User_Features_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_features". All fields are combined with a logical 'AND'. */
export type User_Features_Bool_Exp = {
  _and?: InputMaybe<Array<User_Features_Bool_Exp>>;
  _not?: InputMaybe<User_Features_Bool_Exp>;
  _or?: InputMaybe<Array<User_Features_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  feature?: InputMaybe<Features_Type_Enum_Comparison_Exp>;
  features_type?: InputMaybe<Features_Type_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_features" */
export enum User_Features_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserFeaturesPkey = 'user_features_pkey',
}

/** input type for incrementing numeric columns in table "user_features" */
export type User_Features_Inc_Input = {
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_features" */
export type User_Features_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  feature?: InputMaybe<Features_Type_Enum>;
  features_type?: InputMaybe<Features_Type_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type User_Features_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_features" */
export type User_Features_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Features_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_features" */
export type User_Features_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_features" */
export type User_Features_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Features>;
};

/** on_conflict condition type for table "user_features" */
export type User_Features_On_Conflict = {
  constraint: User_Features_Constraint;
  update_columns?: Array<User_Features_Update_Column>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

/** Ordering options when selecting data from "user_features". */
export type User_Features_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  feature?: InputMaybe<Order_By>;
  features_type?: InputMaybe<Features_Type_Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_features */
export type User_Features_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_features" */
export enum User_Features_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Feature = 'feature',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_features" */
export type User_Features_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  feature?: InputMaybe<Features_Type_Enum>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Features_Stddev_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_features" */
export type User_Features_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Features_Stddev_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_features" */
export type User_Features_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Features_Stddev_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_features" */
export type User_Features_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_features" */
export type User_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Features_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  feature?: InputMaybe<Features_Type_Enum>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Features_Sum_Fields = {
  created_by?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_features" */
export type User_Features_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_features" */
export enum User_Features_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Feature = 'feature',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type User_Features_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Features_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Features_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Features_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Features_Var_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_features" */
export type User_Features_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Features_Var_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_features" */
export type User_Features_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Features_Variance_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_features" */
export type User_Features_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_interest" */
export type User_Interest = {
  id: Scalars['bigint']['output'];
  /** An object relationship */
  interest: Interest;
  interest_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "user_interest" */
export type User_Interest_Aggregate = {
  aggregate?: Maybe<User_Interest_Aggregate_Fields>;
  nodes: Array<User_Interest>;
};

export type User_Interest_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Interest_Aggregate_Bool_Exp_Count>;
};

export type User_Interest_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Interest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Interest_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_interest" */
export type User_Interest_Aggregate_Fields = {
  avg?: Maybe<User_Interest_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Interest_Max_Fields>;
  min?: Maybe<User_Interest_Min_Fields>;
  stddev?: Maybe<User_Interest_Stddev_Fields>;
  stddev_pop?: Maybe<User_Interest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Interest_Stddev_Samp_Fields>;
  sum?: Maybe<User_Interest_Sum_Fields>;
  var_pop?: Maybe<User_Interest_Var_Pop_Fields>;
  var_samp?: Maybe<User_Interest_Var_Samp_Fields>;
  variance?: Maybe<User_Interest_Variance_Fields>;
};

/** aggregate fields of "user_interest" */
export type User_Interest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Interest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_interest" */
export type User_Interest_Aggregate_Order_By = {
  avg?: InputMaybe<User_Interest_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Interest_Max_Order_By>;
  min?: InputMaybe<User_Interest_Min_Order_By>;
  stddev?: InputMaybe<User_Interest_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Interest_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Interest_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Interest_Sum_Order_By>;
  var_pop?: InputMaybe<User_Interest_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Interest_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Interest_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_interest" */
export type User_Interest_Arr_Rel_Insert_Input = {
  data: Array<User_Interest_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Interest_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Interest_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_interest" */
export type User_Interest_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_interest". All fields are combined with a logical 'AND'. */
export type User_Interest_Bool_Exp = {
  _and?: InputMaybe<Array<User_Interest_Bool_Exp>>;
  _not?: InputMaybe<User_Interest_Bool_Exp>;
  _or?: InputMaybe<Array<User_Interest_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  interest?: InputMaybe<Interest_Bool_Exp>;
  interest_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_interest" */
export enum User_Interest_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserInterestPkey = 'user_interest_pkey',
}

/** input type for incrementing numeric columns in table "user_interest" */
export type User_Interest_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  interest_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_interest" */
export type User_Interest_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  interest?: InputMaybe<Interest_Obj_Rel_Insert_Input>;
  interest_id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Interest_Max_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
  interest_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_interest" */
export type User_Interest_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Interest_Min_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
  interest_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_interest" */
export type User_Interest_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_interest" */
export type User_Interest_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Interest>;
};

/** on_conflict condition type for table "user_interest" */
export type User_Interest_On_Conflict = {
  constraint: User_Interest_Constraint;
  update_columns?: Array<User_Interest_Update_Column>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

/** Ordering options when selecting data from "user_interest". */
export type User_Interest_Order_By = {
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Interest_Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_interest */
export type User_Interest_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_interest" */
export enum User_Interest_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InterestId = 'interest_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_interest" */
export type User_Interest_Set_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  interest_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Interest_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_interest" */
export type User_Interest_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Interest_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_interest" */
export type User_Interest_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Interest_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_interest" */
export type User_Interest_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_interest" */
export type User_Interest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Interest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Interest_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  interest_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Interest_Sum_Fields = {
  id?: Maybe<Scalars['bigint']['output']>;
  interest_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_interest" */
export type User_Interest_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_interest" */
export enum User_Interest_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InterestId = 'interest_id',
  /** column name */
  UserId = 'user_id',
}

export type User_Interest_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Interest_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Interest_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Interest_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Interest_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_interest" */
export type User_Interest_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Interest_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_interest" */
export type User_Interest_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Interest_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  interest_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_interest" */
export type User_Interest_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  interest_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_role" */
export type User_Role = {
  description: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "user_role" */
export type User_RoleUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "user_role" */
export type User_RoleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserRolePkey = 'user_role_pkey',
}

export enum User_Role_Enum {
  Admin = 'ADMIN',
  Coach = 'COACH',
  CompanyAdmin = 'COMPANY_ADMIN',
  CompanySecretary = 'COMPANY_SECRETARY',
  User = 'USER',
}

/** Boolean expression to compare columns of type "user_role_enum". All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Role_Enum>;
  _in?: InputMaybe<Array<User_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Role_Enum>;
  _nin?: InputMaybe<Array<User_Role_Enum>>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** input type for inserting object relation for remote table "user_role" */
export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  description?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type User_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Role_Bool_Exp;
};

/** columns and relationships of "user_status" */
export type User_Status = {
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String']['output'];
};

/** columns and relationships of "user_status" */
export type User_StatusUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "user_status" */
export type User_StatusUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_status" */
export type User_Status_Aggregate = {
  aggregate?: Maybe<User_Status_Aggregate_Fields>;
  nodes: Array<User_Status>;
};

/** aggregate fields of "user_status" */
export type User_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<User_Status_Max_Fields>;
  min?: Maybe<User_Status_Min_Fields>;
};

/** aggregate fields of "user_status" */
export type User_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_status". All fields are combined with a logical 'AND'. */
export type User_Status_Bool_Exp = {
  _and?: InputMaybe<Array<User_Status_Bool_Exp>>;
  _not?: InputMaybe<User_Status_Bool_Exp>;
  _or?: InputMaybe<Array<User_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_status" */
export enum User_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserStatusPkey = 'user_status_pkey',
}

export enum User_Status_Enum {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Pending = 'PENDING',
  /** The user has requested the deletion of the account */
  Removed = 'REMOVED',
  ToBeVerified = 'TO_BE_VERIFIED',
  Verified = 'VERIFIED',
}

/** Boolean expression to compare columns of type "user_status_enum". All fields are combined with logical 'AND'. */
export type User_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Status_Enum>;
  _in?: InputMaybe<Array<User_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Status_Enum>;
  _nin?: InputMaybe<Array<User_Status_Enum>>;
};

/** input type for inserting data into table "user_status" */
export type User_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_status" */
export type User_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Status>;
};

/** input type for inserting object relation for remote table "user_status" */
export type User_Status_Obj_Rel_Insert_Input = {
  data: User_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Status_On_Conflict>;
};

/** on_conflict condition type for table "user_status" */
export type User_Status_On_Conflict = {
  constraint: User_Status_Constraint;
  update_columns?: Array<User_Status_Update_Column>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "user_status". */
export type User_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_status */
export type User_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_status" */
export enum User_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "user_status" */
export type User_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_status" */
export type User_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_status" */
export enum User_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type User_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Status_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  /** An array relationship */
  audios: Array<Audio>;
  /** An array relationship */
  audiosByUserId: Array<Audio>;
  /** An aggregate relationship */
  audiosByUserId_aggregate: Audio_Aggregate;
  /** An aggregate relationship */
  audios_aggregate: Audio_Aggregate;
  /** An array relationship */
  coach_services: Array<Coach_Services>;
  /** An aggregate relationship */
  coach_services_aggregate: Coach_Services_Aggregate;
  /** An array relationship */
  coaches_infos: Array<Coaches_Info>;
  /** An aggregate relationship */
  coaches_infos_aggregate: Coaches_Info_Aggregate;
  /** An array relationship */
  companies: Array<Companies>;
  /** An aggregate relationship */
  companies_aggregate: Companies_Aggregate;
  /** An object relationship */
  company: Companies;
  company_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['Int']['output']>;
  description_bio?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  email: Scalars['String']['output'];
  has_accepted_policy?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['bigint']['output'];
  is_first_login?: Maybe<Scalars['Boolean']['output']>;
  is_temporary_password: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  photo_cdn_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  postCommentsByCreatedBy: Array<Post_Comments>;
  /** An aggregate relationship */
  postCommentsByCreatedBy_aggregate: Post_Comments_Aggregate;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An array relationship */
  postsByUserId: Array<Posts>;
  /** An aggregate relationship */
  postsByUserId_aggregate: Posts_Aggregate;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** An array relationship */
  purchaseCommentInfosByAuthorPaid: Array<Purchase_Comment_Info>;
  /** An aggregate relationship */
  purchaseCommentInfosByAuthorPaid_aggregate: Purchase_Comment_Info_Aggregate;
  /** An array relationship */
  purchaseCommentInfosByCreatedBy: Array<Purchase_Comment_Info>;
  /** An aggregate relationship */
  purchaseCommentInfosByCreatedBy_aggregate: Purchase_Comment_Info_Aggregate;
  /** An array relationship */
  purchase_comment_infos: Array<Purchase_Comment_Info>;
  /** An aggregate relationship */
  purchase_comment_infos_aggregate: Purchase_Comment_Info_Aggregate;
  role: User_Role_Enum;
  /** An array relationship */
  saved_posts: Array<Saved_Posts>;
  /** An aggregate relationship */
  saved_posts_aggregate: Saved_Posts_Aggregate;
  status: User_Status_Enum;
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An array relationship */
  stitchesByCreatedBy: Array<Stitches>;
  /** An aggregate relationship */
  stitchesByCreatedBy_aggregate: Stitches_Aggregate;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  /** An object relationship */
  subscriptionTypeBySubscriptionType: Subscription_Type;
  subscription_end_at?: Maybe<Scalars['timestamptz']['output']>;
  subscription_start_at?: Maybe<Scalars['timestamptz']['output']>;
  subscription_type: Subscription_Type_Enum;
  surname: Scalars['String']['output'];
  tempCode?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  /** An array relationship */
  user_interests: Array<User_Interest>;
  /** An aggregate relationship */
  user_interests_aggregate: User_Interest_Aggregate;
  /** An object relationship */
  user_role: User_Role;
  /** An object relationship */
  user_status: User_Status;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** An array relationship */
  videoRecordingsRequiredsByRequiredBy: Array<Video_Recordings_Required>;
  /** An aggregate relationship */
  videoRecordingsRequiredsByRequiredBy_aggregate: Video_Recordings_Required_Aggregate;
  /** An array relationship */
  video_recordings_requireds: Array<Video_Recordings_Required>;
  /** An aggregate relationship */
  video_recordings_requireds_aggregate: Video_Recordings_Required_Aggregate;
  /** An array relationship */
  videos: Array<Video>;
  /** An array relationship */
  videosByUserId: Array<Video>;
  /** An aggregate relationship */
  videosByUserId_aggregate: Video_Aggregate;
  /** An aggregate relationship */
  videos_aggregate: Video_Aggregate;
};

/** columns and relationships of "users" */
export type UsersAudiosArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersAudiosByUserIdArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersAudiosByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersAudios_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audio_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audio_Order_By>>;
  where?: InputMaybe<Audio_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCoach_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCoach_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coach_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coach_Services_Order_By>>;
  where?: InputMaybe<Coach_Services_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCoaches_InfosArgs = {
  distinct_on?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coaches_Info_Order_By>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCoaches_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coaches_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coaches_Info_Order_By>>;
  where?: InputMaybe<Coaches_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostCommentsByCreatedByArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostCommentsByCreatedBy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostsByUserIdArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostsByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPurchaseCommentInfosByAuthorPaidArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPurchaseCommentInfosByAuthorPaid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPurchaseCommentInfosByCreatedByArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPurchaseCommentInfosByCreatedBy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPurchase_Comment_InfosArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPurchase_Comment_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Comment_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Comment_Info_Order_By>>;
  where?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSaved_PostsArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSaved_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Posts_Order_By>>;
  where?: InputMaybe<Saved_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersStitchesByCreatedByArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersStitchesByCreatedBy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUser_InterestsArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUser_Interests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Interest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Interest_Order_By>>;
  where?: InputMaybe<User_Interest_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideoRecordingsRequiredsByRequiredByArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideoRecordingsRequiredsByRequiredBy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideo_Recordings_RequiredsArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideo_Recordings_Requireds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideosArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideosByUserIdArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideosByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Order_By>>;
  where?: InputMaybe<Video_Bool_Exp>;
};

export type UsersLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  audios?: InputMaybe<Audio_Bool_Exp>;
  audiosByUserId?: InputMaybe<Audio_Bool_Exp>;
  audiosByUserId_aggregate?: InputMaybe<Audio_Aggregate_Bool_Exp>;
  audios_aggregate?: InputMaybe<Audio_Aggregate_Bool_Exp>;
  coach_services?: InputMaybe<Coach_Services_Bool_Exp>;
  coach_services_aggregate?: InputMaybe<Coach_Services_Aggregate_Bool_Exp>;
  coaches_infos?: InputMaybe<Coaches_Info_Bool_Exp>;
  coaches_infos_aggregate?: InputMaybe<Coaches_Info_Aggregate_Bool_Exp>;
  companies?: InputMaybe<Companies_Bool_Exp>;
  companies_aggregate?: InputMaybe<Companies_Aggregate_Bool_Exp>;
  company?: InputMaybe<Companies_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  description_bio?: InputMaybe<String_Comparison_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  has_accepted_policy?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_first_login?: InputMaybe<Boolean_Comparison_Exp>;
  is_temporary_password?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  photo_cdn_id?: InputMaybe<String_Comparison_Exp>;
  postCommentsByCreatedBy?: InputMaybe<Post_Comments_Bool_Exp>;
  postCommentsByCreatedBy_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  postsByUserId?: InputMaybe<Posts_Bool_Exp>;
  postsByUserId_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  purchaseCommentInfosByAuthorPaid?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  purchaseCommentInfosByAuthorPaid_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp>;
  purchaseCommentInfosByCreatedBy?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  purchaseCommentInfosByCreatedBy_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp>;
  purchase_comment_infos?: InputMaybe<Purchase_Comment_Info_Bool_Exp>;
  purchase_comment_infos_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Bool_Exp>;
  role?: InputMaybe<User_Role_Enum_Comparison_Exp>;
  saved_posts?: InputMaybe<Saved_Posts_Bool_Exp>;
  saved_posts_aggregate?: InputMaybe<Saved_Posts_Aggregate_Bool_Exp>;
  status?: InputMaybe<User_Status_Enum_Comparison_Exp>;
  stitches?: InputMaybe<Stitches_Bool_Exp>;
  stitchesByCreatedBy?: InputMaybe<Stitches_Bool_Exp>;
  stitchesByCreatedBy_aggregate?: InputMaybe<Stitches_Aggregate_Bool_Exp>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Bool_Exp>;
  subscriptionTypeBySubscriptionType?: InputMaybe<Subscription_Type_Bool_Exp>;
  subscription_end_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  subscription_start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  subscription_type?: InputMaybe<Subscription_Type_Enum_Comparison_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  tempCode?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_features?: InputMaybe<User_Features_Bool_Exp>;
  user_features_aggregate?: InputMaybe<User_Features_Aggregate_Bool_Exp>;
  user_interests?: InputMaybe<User_Interest_Bool_Exp>;
  user_interests_aggregate?: InputMaybe<User_Interest_Aggregate_Bool_Exp>;
  user_role?: InputMaybe<User_Role_Bool_Exp>;
  user_status?: InputMaybe<User_Status_Bool_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  videoRecordingsRequiredsByRequiredBy?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
  videoRecordingsRequiredsByRequiredBy_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Bool_Exp>;
  video_recordings_requireds?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
  video_recordings_requireds_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Bool_Exp>;
  videos?: InputMaybe<Video_Bool_Exp>;
  videosByUserId?: InputMaybe<Video_Bool_Exp>;
  videosByUserId_aggregate?: InputMaybe<Video_Aggregate_Bool_Exp>;
  videos_aggregate?: InputMaybe<Video_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint on columns "id", "email" */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  tempCode?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  audios?: InputMaybe<Audio_Arr_Rel_Insert_Input>;
  audiosByUserId?: InputMaybe<Audio_Arr_Rel_Insert_Input>;
  coach_services?: InputMaybe<Coach_Services_Arr_Rel_Insert_Input>;
  coaches_infos?: InputMaybe<Coaches_Info_Arr_Rel_Insert_Input>;
  companies?: InputMaybe<Companies_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description_bio?: InputMaybe<Scalars['String']['input']>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  has_accepted_policy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_first_login?: InputMaybe<Scalars['Boolean']['input']>;
  is_temporary_password?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_cdn_id?: InputMaybe<Scalars['String']['input']>;
  postCommentsByCreatedBy?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  postsByUserId?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  purchaseCommentInfosByAuthorPaid?: InputMaybe<Purchase_Comment_Info_Arr_Rel_Insert_Input>;
  purchaseCommentInfosByCreatedBy?: InputMaybe<Purchase_Comment_Info_Arr_Rel_Insert_Input>;
  purchase_comment_infos?: InputMaybe<Purchase_Comment_Info_Arr_Rel_Insert_Input>;
  role?: InputMaybe<User_Role_Enum>;
  saved_posts?: InputMaybe<Saved_Posts_Arr_Rel_Insert_Input>;
  status?: InputMaybe<User_Status_Enum>;
  stitches?: InputMaybe<Stitches_Arr_Rel_Insert_Input>;
  stitchesByCreatedBy?: InputMaybe<Stitches_Arr_Rel_Insert_Input>;
  subscriptionTypeBySubscriptionType?: InputMaybe<Subscription_Type_Obj_Rel_Insert_Input>;
  subscription_end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscription_start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscription_type?: InputMaybe<Subscription_Type_Enum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  tempCode?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_features?: InputMaybe<User_Features_Arr_Rel_Insert_Input>;
  user_interests?: InputMaybe<User_Interest_Arr_Rel_Insert_Input>;
  user_role?: InputMaybe<User_Role_Obj_Rel_Insert_Input>;
  user_status?: InputMaybe<User_Status_Obj_Rel_Insert_Input>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  videoRecordingsRequiredsByRequiredBy?: InputMaybe<Video_Recordings_Required_Arr_Rel_Insert_Input>;
  video_recordings_requireds?: InputMaybe<Video_Recordings_Required_Arr_Rel_Insert_Input>;
  videos?: InputMaybe<Video_Arr_Rel_Insert_Input>;
  videosByUserId?: InputMaybe<Video_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  description_bio?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo_cdn_id?: Maybe<Scalars['String']['output']>;
  subscription_end_at?: Maybe<Scalars['timestamptz']['output']>;
  subscription_start_at?: Maybe<Scalars['timestamptz']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  tempCode?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description_bio?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  photo_cdn_id?: InputMaybe<Order_By>;
  subscription_end_at?: InputMaybe<Order_By>;
  subscription_start_at?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  description_bio?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo_cdn_id?: Maybe<Scalars['String']['output']>;
  subscription_end_at?: Maybe<Scalars['timestamptz']['output']>;
  subscription_start_at?: Maybe<Scalars['timestamptz']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  tempCode?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description_bio?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  photo_cdn_id?: InputMaybe<Order_By>;
  subscription_end_at?: InputMaybe<Order_By>;
  subscription_start_at?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  audiosByUserId_aggregate?: InputMaybe<Audio_Aggregate_Order_By>;
  audios_aggregate?: InputMaybe<Audio_Aggregate_Order_By>;
  coach_services_aggregate?: InputMaybe<Coach_Services_Aggregate_Order_By>;
  coaches_infos_aggregate?: InputMaybe<Coaches_Info_Aggregate_Order_By>;
  companies_aggregate?: InputMaybe<Companies_Aggregate_Order_By>;
  company?: InputMaybe<Companies_Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description_bio?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  has_accepted_policy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_first_login?: InputMaybe<Order_By>;
  is_temporary_password?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  photo_cdn_id?: InputMaybe<Order_By>;
  postCommentsByCreatedBy_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  postsByUserId_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  purchaseCommentInfosByAuthorPaid_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Order_By>;
  purchaseCommentInfosByCreatedBy_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Order_By>;
  purchase_comment_infos_aggregate?: InputMaybe<Purchase_Comment_Info_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  saved_posts_aggregate?: InputMaybe<Saved_Posts_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  stitchesByCreatedBy_aggregate?: InputMaybe<Stitches_Aggregate_Order_By>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Order_By>;
  subscriptionTypeBySubscriptionType?: InputMaybe<Subscription_Type_Order_By>;
  subscription_end_at?: InputMaybe<Order_By>;
  subscription_start_at?: InputMaybe<Order_By>;
  subscription_type?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_features_aggregate?: InputMaybe<User_Features_Aggregate_Order_By>;
  user_interests_aggregate?: InputMaybe<User_Interest_Aggregate_Order_By>;
  user_role?: InputMaybe<User_Role_Order_By>;
  user_status?: InputMaybe<User_Status_Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  videoRecordingsRequiredsByRequiredBy_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Order_By>;
  video_recordings_requireds_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Order_By>;
  videosByUserId_aggregate?: InputMaybe<Video_Aggregate_Order_By>;
  videos_aggregate?: InputMaybe<Video_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  email: Scalars['String']['input'];
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DescriptionBio = 'description_bio',
  /** column name */
  Email = 'email',
  /** column name */
  HasAcceptedPolicy = 'has_accepted_policy',
  /** column name */
  Id = 'id',
  /** column name */
  IsFirstLogin = 'is_first_login',
  /** column name */
  IsTemporaryPassword = 'is_temporary_password',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhotoCdnId = 'photo_cdn_id',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionEndAt = 'subscription_end_at',
  /** column name */
  SubscriptionStartAt = 'subscription_start_at',
  /** column name */
  SubscriptionType = 'subscription_type',
  /** column name */
  Surname = 'surname',
  /** column name */
  TempCode = 'tempCode',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  HasAcceptedPolicy = 'has_accepted_policy',
  /** column name */
  IsFirstLogin = 'is_first_login',
  /** column name */
  IsTemporaryPassword = 'is_temporary_password',
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  HasAcceptedPolicy = 'has_accepted_policy',
  /** column name */
  IsFirstLogin = 'is_first_login',
  /** column name */
  IsTemporaryPassword = 'is_temporary_password',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description_bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  has_accepted_policy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_first_login?: InputMaybe<Scalars['Boolean']['input']>;
  is_temporary_password?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_cdn_id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Role_Enum>;
  status?: InputMaybe<User_Status_Enum>;
  subscription_end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscription_start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscription_type?: InputMaybe<Subscription_Type_Enum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  tempCode?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  description_bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  has_accepted_policy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_first_login?: InputMaybe<Scalars['Boolean']['input']>;
  is_temporary_password?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_cdn_id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Role_Enum>;
  status?: InputMaybe<User_Status_Enum>;
  subscription_end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscription_start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  subscription_type?: InputMaybe<Subscription_Type_Enum>;
  surname?: InputMaybe<Scalars['String']['input']>;
  tempCode?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tempCode?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DescriptionBio = 'description_bio',
  /** column name */
  Email = 'email',
  /** column name */
  HasAcceptedPolicy = 'has_accepted_policy',
  /** column name */
  Id = 'id',
  /** column name */
  IsFirstLogin = 'is_first_login',
  /** column name */
  IsTemporaryPassword = 'is_temporary_password',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhotoCdnId = 'photo_cdn_id',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionEndAt = 'subscription_end_at',
  /** column name */
  SubscriptionStartAt = 'subscription_start_at',
  /** column name */
  SubscriptionType = 'subscription_type',
  /** column name */
  Surname = 'surname',
  /** column name */
  TempCode = 'tempCode',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  company_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tempCode?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tempCode?: InputMaybe<Order_By>;
};

/** columns and relationships of "video" */
export type Video = {
  /** An object relationship */
  bucket: Buckets;
  bucket_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  device: Devices;
  device_id: Scalars['Int']['output'];
  duration_in_seconds: Scalars['float8']['output'];
  id: Scalars['bigint']['output'];
  key: Scalars['String']['output'];
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregate relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  provider?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  stitches: Array<Stitches>;
  /** An aggregate relationship */
  stitches_aggregate: Stitches_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  url: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  userByUserId: Users;
  user_id: Scalars['bigint']['output'];
};

/** columns and relationships of "video" */
export type VideoPost_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "video" */
export type VideoPost_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Comments_Order_By>>;
  where?: InputMaybe<Post_Comments_Bool_Exp>;
};

/** columns and relationships of "video" */
export type VideoPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "video" */
export type VideoPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "video" */
export type VideoStitchesArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** columns and relationships of "video" */
export type VideoStitches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stitches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stitches_Order_By>>;
  where?: InputMaybe<Stitches_Bool_Exp>;
};

/** aggregated selection of "video" */
export type Video_Aggregate = {
  aggregate?: Maybe<Video_Aggregate_Fields>;
  nodes: Array<Video>;
};

export type Video_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Video_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Video_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Video_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Video_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Video_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Video_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Video_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Video_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Video_Aggregate_Bool_Exp_Var_Samp>;
};

export type Video_Aggregate_Bool_Exp_Avg = {
  arguments: Video_Select_Column_Video_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Corr = {
  arguments: Video_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Video_Select_Column_Video_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Video_Select_Column_Video_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Video_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Video_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Video_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Video_Select_Column_Video_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Video_Select_Column_Video_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Video_Aggregate_Bool_Exp_Max = {
  arguments: Video_Select_Column_Video_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Min = {
  arguments: Video_Select_Column_Video_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Video_Select_Column_Video_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Sum = {
  arguments: Video_Select_Column_Video_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Video_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Video_Select_Column_Video_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "video" */
export type Video_Aggregate_Fields = {
  avg?: Maybe<Video_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Video_Max_Fields>;
  min?: Maybe<Video_Min_Fields>;
  stddev?: Maybe<Video_Stddev_Fields>;
  stddev_pop?: Maybe<Video_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Video_Stddev_Samp_Fields>;
  sum?: Maybe<Video_Sum_Fields>;
  var_pop?: Maybe<Video_Var_Pop_Fields>;
  var_samp?: Maybe<Video_Var_Samp_Fields>;
  variance?: Maybe<Video_Variance_Fields>;
};

/** aggregate fields of "video" */
export type Video_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Video_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "video" */
export type Video_Aggregate_Order_By = {
  avg?: InputMaybe<Video_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Video_Max_Order_By>;
  min?: InputMaybe<Video_Min_Order_By>;
  stddev?: InputMaybe<Video_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Video_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Video_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Video_Sum_Order_By>;
  var_pop?: InputMaybe<Video_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Video_Var_Samp_Order_By>;
  variance?: InputMaybe<Video_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "video" */
export type Video_Arr_Rel_Insert_Input = {
  data: Array<Video_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Video_On_Conflict>;
};

/** aggregate avg on columns */
export type Video_Avg_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "video" */
export type Video_Avg_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "video". All fields are combined with a logical 'AND'. */
export type Video_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Bool_Exp>>;
  _not?: InputMaybe<Video_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucket_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  device?: InputMaybe<Devices_Bool_Exp>;
  device_id?: InputMaybe<Int_Comparison_Exp>;
  duration_in_seconds?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  post_comments?: InputMaybe<Post_Comments_Bool_Exp>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Bool_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  resolution?: InputMaybe<String_Comparison_Exp>;
  stitches?: InputMaybe<Stitches_Bool_Exp>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByUserId?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "video" */
export enum Video_Constraint {
  /** unique or primary key constraint on columns "id" */
  VideoPkey = 'video_pkey',
}

/** input type for incrementing numeric columns in table "video" */
export type Video_Inc_Input = {
  bucket_id?: InputMaybe<Scalars['bigint']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  duration_in_seconds?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "video" */
export type Video_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucket_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device?: InputMaybe<Devices_Obj_Rel_Insert_Input>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  duration_in_seconds?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  post_comments?: InputMaybe<Post_Comments_Arr_Rel_Insert_Input>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resolution?: InputMaybe<Scalars['String']['input']>;
  stitches?: InputMaybe<Stitches_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Video_Max_Fields = {
  bucket_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  device_id?: Maybe<Scalars['Int']['output']>;
  duration_in_seconds?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "video" */
export type Video_Max_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  resolution?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Video_Min_Fields = {
  bucket_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  device_id?: Maybe<Scalars['Int']['output']>;
  duration_in_seconds?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "video" */
export type Video_Min_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  resolution?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "video" */
export type Video_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Video>;
};

/** input type for inserting object relation for remote table "video" */
export type Video_Obj_Rel_Insert_Input = {
  data: Video_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Video_On_Conflict>;
};

/** on_conflict condition type for table "video" */
export type Video_On_Conflict = {
  constraint: Video_Constraint;
  update_columns?: Array<Video_Update_Column>;
  where?: InputMaybe<Video_Bool_Exp>;
};

/** Ordering options when selecting data from "video". */
export type Video_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucket_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device?: InputMaybe<Devices_Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  post_comments_aggregate?: InputMaybe<Post_Comments_Aggregate_Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  provider?: InputMaybe<Order_By>;
  resolution?: InputMaybe<Order_By>;
  stitches_aggregate?: InputMaybe<Stitches_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByUserId?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: video */
export type Video_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** columns and relationships of "video_recordings_required" */
export type Video_Recordings_Required = {
  created_at: Scalars['timestamptz']['output'];
  created_by?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  device: Devices;
  device_id: Scalars['Int']['output'];
  ended_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  required_by: Scalars['bigint']['output'];
  status: Video_Recordings_Status_Enum;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  userByRequiredBy: Users;
  /** An object relationship */
  video_recordings_status: Video_Recordings_Status;
};

/** aggregated selection of "video_recordings_required" */
export type Video_Recordings_Required_Aggregate = {
  aggregate?: Maybe<Video_Recordings_Required_Aggregate_Fields>;
  nodes: Array<Video_Recordings_Required>;
};

export type Video_Recordings_Required_Aggregate_Bool_Exp = {
  count?: InputMaybe<Video_Recordings_Required_Aggregate_Bool_Exp_Count>;
};

export type Video_Recordings_Required_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "video_recordings_required" */
export type Video_Recordings_Required_Aggregate_Fields = {
  avg?: Maybe<Video_Recordings_Required_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Video_Recordings_Required_Max_Fields>;
  min?: Maybe<Video_Recordings_Required_Min_Fields>;
  stddev?: Maybe<Video_Recordings_Required_Stddev_Fields>;
  stddev_pop?: Maybe<Video_Recordings_Required_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Video_Recordings_Required_Stddev_Samp_Fields>;
  sum?: Maybe<Video_Recordings_Required_Sum_Fields>;
  var_pop?: Maybe<Video_Recordings_Required_Var_Pop_Fields>;
  var_samp?: Maybe<Video_Recordings_Required_Var_Samp_Fields>;
  variance?: Maybe<Video_Recordings_Required_Variance_Fields>;
};

/** aggregate fields of "video_recordings_required" */
export type Video_Recordings_Required_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "video_recordings_required" */
export type Video_Recordings_Required_Aggregate_Order_By = {
  avg?: InputMaybe<Video_Recordings_Required_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Video_Recordings_Required_Max_Order_By>;
  min?: InputMaybe<Video_Recordings_Required_Min_Order_By>;
  stddev?: InputMaybe<Video_Recordings_Required_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Video_Recordings_Required_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Video_Recordings_Required_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Video_Recordings_Required_Sum_Order_By>;
  var_pop?: InputMaybe<Video_Recordings_Required_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Video_Recordings_Required_Var_Samp_Order_By>;
  variance?: InputMaybe<Video_Recordings_Required_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "video_recordings_required" */
export type Video_Recordings_Required_Arr_Rel_Insert_Input = {
  data: Array<Video_Recordings_Required_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Video_Recordings_Required_On_Conflict>;
};

/** aggregate avg on columns */
export type Video_Recordings_Required_Avg_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "video_recordings_required". All fields are combined with a logical 'AND'. */
export type Video_Recordings_Required_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Recordings_Required_Bool_Exp>>;
  _not?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Recordings_Required_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  device?: InputMaybe<Devices_Bool_Exp>;
  device_id?: InputMaybe<Int_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  required_by?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Video_Recordings_Status_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByRequiredBy?: InputMaybe<Users_Bool_Exp>;
  video_recordings_status?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

/** unique or primary key constraints on table "video_recordings_required" */
export enum Video_Recordings_Required_Constraint {
  /** unique or primary key constraint on columns "id" */
  VideoRecordingsRequiredPkey = 'video_recordings_required_pkey',
}

/** input type for incrementing numeric columns in table "video_recordings_required" */
export type Video_Recordings_Required_Inc_Input = {
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  required_by?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "video_recordings_required" */
export type Video_Recordings_Required_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device?: InputMaybe<Devices_Obj_Rel_Insert_Input>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  required_by?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Video_Recordings_Status_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByRequiredBy?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  video_recordings_status?: InputMaybe<Video_Recordings_Status_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Video_Recordings_Required_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  device_id?: Maybe<Scalars['Int']['output']>;
  ended_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  required_by?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Video_Recordings_Required_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  device_id?: Maybe<Scalars['Int']['output']>;
  ended_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  required_by?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "video_recordings_required" */
export type Video_Recordings_Required_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Recordings_Required>;
};

/** on_conflict condition type for table "video_recordings_required" */
export type Video_Recordings_Required_On_Conflict = {
  constraint: Video_Recordings_Required_Constraint;
  update_columns?: Array<Video_Recordings_Required_Update_Column>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** Ordering options when selecting data from "video_recordings_required". */
export type Video_Recordings_Required_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device?: InputMaybe<Devices_Order_By>;
  device_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByRequiredBy?: InputMaybe<Users_Order_By>;
  video_recordings_status?: InputMaybe<Video_Recordings_Status_Order_By>;
};

/** primary key columns input for table: video_recordings_required */
export type Video_Recordings_Required_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "video_recordings_required" */
export enum Video_Recordings_Required_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  RequiredBy = 'required_by',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "video_recordings_required" */
export type Video_Recordings_Required_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  required_by?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Video_Recordings_Status_Enum>;
};

/** aggregate stddev on columns */
export type Video_Recordings_Required_Stddev_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Video_Recordings_Required_Stddev_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Video_Recordings_Required_Stddev_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "video_recordings_required" */
export type Video_Recordings_Required_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Recordings_Required_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Recordings_Required_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  required_by?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Video_Recordings_Status_Enum>;
};

/** aggregate sum on columns */
export type Video_Recordings_Required_Sum_Fields = {
  created_by?: Maybe<Scalars['bigint']['output']>;
  device_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  required_by?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** update columns of table "video_recordings_required" */
export enum Video_Recordings_Required_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  RequiredBy = 'required_by',
  /** column name */
  Status = 'status',
}

export type Video_Recordings_Required_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Video_Recordings_Required_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Video_Recordings_Required_Set_Input>;
  /** filter the rows which have to be updated */
  where: Video_Recordings_Required_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Video_Recordings_Required_Var_Pop_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Video_Recordings_Required_Var_Samp_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Video_Recordings_Required_Variance_Fields = {
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  required_by?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "video_recordings_required" */
export type Video_Recordings_Required_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  required_by?: InputMaybe<Order_By>;
};

/** columns and relationships of "video_recordings_status" */
export type Video_Recordings_Status = {
  description: Scalars['String']['output'];
  value: Scalars['String']['output'];
  /** An array relationship */
  video_recordings_requireds: Array<Video_Recordings_Required>;
  /** An aggregate relationship */
  video_recordings_requireds_aggregate: Video_Recordings_Required_Aggregate;
};

/** columns and relationships of "video_recordings_status" */
export type Video_Recordings_StatusVideo_Recordings_RequiredsArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** columns and relationships of "video_recordings_status" */
export type Video_Recordings_StatusVideo_Recordings_Requireds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Video_Recordings_Required_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Recordings_Required_Order_By>>;
  where?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
};

/** aggregated selection of "video_recordings_status" */
export type Video_Recordings_Status_Aggregate = {
  aggregate?: Maybe<Video_Recordings_Status_Aggregate_Fields>;
  nodes: Array<Video_Recordings_Status>;
};

/** aggregate fields of "video_recordings_status" */
export type Video_Recordings_Status_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Video_Recordings_Status_Max_Fields>;
  min?: Maybe<Video_Recordings_Status_Min_Fields>;
};

/** aggregate fields of "video_recordings_status" */
export type Video_Recordings_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Video_Recordings_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "video_recordings_status". All fields are combined with a logical 'AND'. */
export type Video_Recordings_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Recordings_Status_Bool_Exp>>;
  _not?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Recordings_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  video_recordings_requireds?: InputMaybe<Video_Recordings_Required_Bool_Exp>;
  video_recordings_requireds_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "video_recordings_status" */
export enum Video_Recordings_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  VideoRecordingsStatusPkey = 'video_recordings_status_pkey',
}

export enum Video_Recordings_Status_Enum {
  /** device blocked by anomaly */
  Blocked = 'BLOCKED',
  /** registration ended */
  Ended = 'ENDED',
  /** failed connection or other */
  Error = 'ERROR',
  /** request submitted, registration is starting */
  Pending = 'PENDING',
  /** on recording */
  Recording = 'RECORDING',
}

/** Boolean expression to compare columns of type "video_recordings_status_enum". All fields are combined with logical 'AND'. */
export type Video_Recordings_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Video_Recordings_Status_Enum>;
  _in?: InputMaybe<Array<Video_Recordings_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Video_Recordings_Status_Enum>;
  _nin?: InputMaybe<Array<Video_Recordings_Status_Enum>>;
};

/** input type for inserting data into table "video_recordings_status" */
export type Video_Recordings_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  video_recordings_requireds?: InputMaybe<Video_Recordings_Required_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Video_Recordings_Status_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Video_Recordings_Status_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "video_recordings_status" */
export type Video_Recordings_Status_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Recordings_Status>;
};

/** input type for inserting object relation for remote table "video_recordings_status" */
export type Video_Recordings_Status_Obj_Rel_Insert_Input = {
  data: Video_Recordings_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Video_Recordings_Status_On_Conflict>;
};

/** on_conflict condition type for table "video_recordings_status" */
export type Video_Recordings_Status_On_Conflict = {
  constraint: Video_Recordings_Status_Constraint;
  update_columns?: Array<Video_Recordings_Status_Update_Column>;
  where?: InputMaybe<Video_Recordings_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "video_recordings_status". */
export type Video_Recordings_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  video_recordings_requireds_aggregate?: InputMaybe<Video_Recordings_Required_Aggregate_Order_By>;
};

/** primary key columns input for table: video_recordings_status */
export type Video_Recordings_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "video_recordings_status" */
export enum Video_Recordings_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "video_recordings_status" */
export type Video_Recordings_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "video_recordings_status" */
export type Video_Recordings_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Recordings_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Recordings_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "video_recordings_status" */
export enum Video_Recordings_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type Video_Recordings_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Video_Recordings_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Video_Recordings_Status_Bool_Exp;
};

/** select columns of table "video" */
export enum Video_Select_Column {
  /** column name */
  BucketId = 'bucket_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Provider = 'provider',
  /** column name */
  Resolution = 'resolution',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** select "video_aggregate_bool_exp_avg_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_corr_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_max_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_min_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_sum_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** select "video_aggregate_bool_exp_var_samp_arguments_columns" columns of table "video" */
export enum Video_Select_Column_Video_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
}

/** input type for updating data in table "video" */
export type Video_Set_Input = {
  bucket_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  duration_in_seconds?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resolution?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Video_Stddev_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "video" */
export type Video_Stddev_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Video_Stddev_Pop_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "video" */
export type Video_Stddev_Pop_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Video_Stddev_Samp_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "video" */
export type Video_Stddev_Samp_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "video" */
export type Video_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Stream_Cursor_Value_Input = {
  bucket_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['bigint']['input']>;
  device_id?: InputMaybe<Scalars['Int']['input']>;
  duration_in_seconds?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resolution?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Video_Sum_Fields = {
  bucket_id?: Maybe<Scalars['bigint']['output']>;
  created_by?: Maybe<Scalars['bigint']['output']>;
  device_id?: Maybe<Scalars['Int']['output']>;
  duration_in_seconds?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "video" */
export type Video_Sum_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "video" */
export enum Video_Update_Column {
  /** column name */
  BucketId = 'bucket_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  DurationInSeconds = 'duration_in_seconds',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Provider = 'provider',
  /** column name */
  Resolution = 'resolution',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

export type Video_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Video_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Video_Set_Input>;
  /** filter the rows which have to be updated */
  where: Video_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Video_Var_Pop_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "video" */
export type Video_Var_Pop_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Video_Var_Samp_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "video" */
export type Video_Var_Samp_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Video_Variance_Fields = {
  bucket_id?: Maybe<Scalars['Float']['output']>;
  created_by?: Maybe<Scalars['Float']['output']>;
  device_id?: Maybe<Scalars['Float']['output']>;
  duration_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "video" */
export type Video_Variance_Order_By = {
  bucket_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  duration_in_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};
