import {
  pgTable,
  unique,
  pgEnum,
  serial,
  text,
  integer,
  pgSchema,
  varchar,
  uuid,
  timestamp,
  uniqueIndex,
  index,
  jsonb,
  boolean,
  smallint,
  json,
  foreignKey,
  bigserial,
  inet,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const auth = pgSchema('auth')
export const aalLevel = auth.enum('aal_level', ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = auth.enum('code_challenge_method', [
  's256',
  'plain',
])
export const factorStatus = auth.enum('factor_status', [
  'unverified',
  'verified',
])
export const factorType = auth.enum('factor_type', [
  'totp',
  'webauthn',
  'phone',
])
export const oneTimeTokenType = auth.enum('one_time_token_type', [
  'confirmation_token',
  'reauthentication_token',
  'recovery_token',
  'email_change_token_new',
  'email_change_token_current',
  'phone_change_token',
])

export const schemaMigrationsInAuth = auth.table('schema_migrations', {
  version: varchar('version', { length: 255 }).primaryKey().notNull(),
})

export const instancesInAuth = auth.table('instances', {
  id: uuid('id').primaryKey().notNull(),
  uuid: uuid('uuid'),
  rawBaseConfig: text('raw_base_config'),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
})

export const usersInAuth = auth.table(
  'users',
  {
    instanceId: uuid('instance_id'),
    id: uuid('id').primaryKey().notNull(),
    aud: varchar('aud', { length: 255 }),
    role: varchar('role', { length: 255 }),
    email: varchar('email', { length: 255 }),
    encryptedPassword: varchar('encrypted_password', { length: 255 }),
    emailConfirmedAt: timestamp('email_confirmed_at', {
      withTimezone: true,
      mode: 'string',
    }),
    invitedAt: timestamp('invited_at', { withTimezone: true, mode: 'string' }),
    confirmationToken: varchar('confirmation_token', { length: 255 }),
    confirmationSentAt: timestamp('confirmation_sent_at', {
      withTimezone: true,
      mode: 'string',
    }),
    recoveryToken: varchar('recovery_token', { length: 255 }),
    recoverySentAt: timestamp('recovery_sent_at', {
      withTimezone: true,
      mode: 'string',
    }),
    emailChangeTokenNew: varchar('email_change_token_new', { length: 255 }),
    emailChange: varchar('email_change', { length: 255 }),
    emailChangeSentAt: timestamp('email_change_sent_at', {
      withTimezone: true,
      mode: 'string',
    }),
    lastSignInAt: timestamp('last_sign_in_at', {
      withTimezone: true,
      mode: 'string',
    }),
    rawAppMetaData: jsonb('raw_app_meta_data'),
    rawUserMetaData: jsonb('raw_user_meta_data'),
    isSuperAdmin: boolean('is_super_admin'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    phone: text('phone').default(''),
    phoneConfirmedAt: timestamp('phone_confirmed_at', {
      withTimezone: true,
      mode: 'string',
    }),
    phoneChange: text('phone_change').default(''),
    phoneChangeToken: varchar('phone_change_token', { length: 255 }).default(
      '',
    ),
    phoneChangeSentAt: timestamp('phone_change_sent_at', {
      withTimezone: true,
      mode: 'string',
    }),
    confirmedAt: timestamp('confirmed_at', {
      withTimezone: true,
      mode: 'string',
    }).generatedAlwaysAs(sql`LEAST(email_confirmed_at, phone_confirmed_at)`),
    emailChangeTokenCurrent: varchar('email_change_token_current', {
      length: 255,
    }).default(''),
    emailChangeConfirmStatus: smallint('email_change_confirm_status').default(
      0,
    ),
    bannedUntil: timestamp('banned_until', {
      withTimezone: true,
      mode: 'string',
    }),
    reauthenticationToken: varchar('reauthentication_token', {
      length: 255,
    }).default(''),
    reauthenticationSentAt: timestamp('reauthentication_sent_at', {
      withTimezone: true,
      mode: 'string',
    }),
    isSsoUser: boolean('is_sso_user').default(false).notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true, mode: 'string' }),
    isAnonymous: boolean('is_anonymous').default(false).notNull(),
  },
  table => {
    return {
      confirmationTokenIdx: uniqueIndex('confirmation_token_idx')
        .using('btree', table.confirmationToken)
        .where(sql`((confirmation_token)::text !~ '^[0-9 ]*$'::text)`),
      emailChangeTokenCurrentIdx: uniqueIndex('email_change_token_current_idx')
        .using('btree', table.emailChangeTokenCurrent)
        .where(sql`((email_change_token_current)::text !~ '^[0-9 ]*$'::text)`),
      emailChangeTokenNewIdx: uniqueIndex('email_change_token_new_idx')
        .using('btree', table.emailChangeTokenNew)
        .where(sql`((email_change_token_new)::text !~ '^[0-9 ]*$'::text)`),
      reauthenticationTokenIdx: uniqueIndex('reauthentication_token_idx')
        .using('btree', table.reauthenticationToken)
        .where(sql`((reauthentication_token)::text !~ '^[0-9 ]*$'::text)`),
      recoveryTokenIdx: uniqueIndex('recovery_token_idx')
        .using('btree', table.recoveryToken)
        .where(sql`((recovery_token)::text !~ '^[0-9 ]*$'::text)`),
      emailPartialKey: uniqueIndex('users_email_partial_key')
        .using('btree', table.email)
        .where(sql`(is_sso_user = false)`),
      instanceIdEmailIdx: index('users_instance_id_email_idx').using(
        'btree',
        sql`instance_id`,
        sql`null`,
      ),
      instanceIdIdx: index('users_instance_id_idx').using(
        'btree',
        table.instanceId,
      ),
      isAnonymousIdx: index('users_is_anonymous_idx').using(
        'btree',
        table.isAnonymous,
      ),
      usersPhoneKey: unique('users_phone_key').on(table.phone),
    }
  },
)

export const auditLogEntriesInAuth = auth.table(
  'audit_log_entries',
  {
    instanceId: uuid('instance_id'),
    id: uuid('id').primaryKey().notNull(),
    payload: json('payload'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    ipAddress: varchar('ip_address', { length: 64 }).default('').notNull(),
  },
  table => {
    return {
      auditLogsInstanceIdIdx: index('audit_logs_instance_id_idx').using(
        'btree',
        table.instanceId,
      ),
    }
  },
)

export const identitiesInAuth = auth.table(
  'identities',
  {
    providerId: text('provider_id').notNull(),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersInAuth.id, { onDelete: 'cascade' }),
    identityData: jsonb('identity_data').notNull(),
    provider: text('provider').notNull(),
    lastSignInAt: timestamp('last_sign_in_at', {
      withTimezone: true,
      mode: 'string',
    }),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    email: text('email').generatedAlwaysAs(
      sql`lower((identity_data ->> 'email'::text))`,
    ),
    id: uuid('id').defaultRandom().primaryKey().notNull(),
  },
  table => {
    return {
      emailIdx: index('identities_email_idx').using('btree', table.email),
      userIdIdx: index('identities_user_id_idx').using('btree', table.userId),
      identitiesProviderIdProviderUnique: unique(
        'identities_provider_id_provider_unique',
      ).on(table.providerId, table.provider),
    }
  },
)

export const refreshTokensInAuth = auth.table(
  'refresh_tokens',
  {
    instanceId: uuid('instance_id'),
    id: bigserial('id', { mode: 'bigint' }).primaryKey().notNull(),
    token: varchar('token', { length: 255 }),
    userId: varchar('user_id', { length: 255 }),
    revoked: boolean('revoked'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    parent: varchar('parent', { length: 255 }),
    sessionId: uuid('session_id').references(() => sessionsInAuth.id, {
      onDelete: 'cascade',
    }),
  },
  table => {
    return {
      instanceIdIdx: index('refresh_tokens_instance_id_idx').using(
        'btree',
        table.instanceId,
      ),
      instanceIdUserIdIdx: index(
        'refresh_tokens_instance_id_user_id_idx',
      ).using('btree', table.instanceId, table.userId),
      parentIdx: index('refresh_tokens_parent_idx').using(
        'btree',
        table.parent,
      ),
      sessionIdRevokedIdx: index('refresh_tokens_session_id_revoked_idx').using(
        'btree',
        table.sessionId,
        table.revoked,
      ),
      updatedAtIdx: index('refresh_tokens_updated_at_idx').using(
        'btree',
        table.updatedAt,
      ),
      refreshTokensTokenUnique: unique('refresh_tokens_token_unique').on(
        table.token,
      ),
    }
  },
)

export const mfaFactorsInAuth = auth.table(
  'mfa_factors',
  {
    id: uuid('id').primaryKey().notNull(),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersInAuth.id, { onDelete: 'cascade' }),
    friendlyName: text('friendly_name'),
    factorType: factorType('factor_type').notNull(),
    status: factorStatus('status').notNull(),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    }).notNull(),
    updatedAt: timestamp('updated_at', {
      withTimezone: true,
      mode: 'string',
    }).notNull(),
    secret: text('secret'),
    phone: text('phone'),
    lastChallengedAt: timestamp('last_challenged_at', {
      withTimezone: true,
      mode: 'string',
    }),
  },
  table => {
    return {
      factorIdCreatedAtIdx: index('factor_id_created_at_idx').using(
        'btree',
        table.userId,
        table.createdAt,
      ),
      userFriendlyNameUnique: uniqueIndex(
        'mfa_factors_user_friendly_name_unique',
      )
        .using('btree', table.friendlyName, table.userId)
        .where(sql`(TRIM(BOTH FROM friendly_name) <> ''::text)`),
      userIdIdx: index('mfa_factors_user_id_idx').using('btree', table.userId),
      uniqueVerifiedPhoneFactor: uniqueIndex(
        'unique_verified_phone_factor',
      ).using('btree', table.userId, table.phone),
      mfaFactorsPhoneKey: unique('mfa_factors_phone_key').on(table.phone),
      mfaFactorsLastChallengedAtKey: unique(
        'mfa_factors_last_challenged_at_key',
      ).on(table.lastChallengedAt),
    }
  },
)

export const mfaChallengesInAuth = auth.table(
  'mfa_challenges',
  {
    id: uuid('id').primaryKey().notNull(),
    factorId: uuid('factor_id')
      .notNull()
      .references(() => mfaFactorsInAuth.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    }).notNull(),
    verifiedAt: timestamp('verified_at', {
      withTimezone: true,
      mode: 'string',
    }),
    ipAddress: inet('ip_address').notNull(),
    otpCode: text('otp_code'),
  },
  table => {
    return {
      mfaChallengeCreatedAtIdx: index('mfa_challenge_created_at_idx').using(
        'btree',
        table.createdAt,
      ),
    }
  },
)

export const mfaAmrClaimsInAuth = auth.table(
  'mfa_amr_claims',
  {
    sessionId: uuid('session_id')
      .notNull()
      .references(() => sessionsInAuth.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    }).notNull(),
    updatedAt: timestamp('updated_at', {
      withTimezone: true,
      mode: 'string',
    }).notNull(),
    authenticationMethod: text('authentication_method').notNull(),
    id: uuid('id').primaryKey().notNull(),
  },
  table => {
    return {
      mfaAmrClaimsSessionIdAuthenticationMethodPkey: unique(
        'mfa_amr_claims_session_id_authentication_method_pkey',
      ).on(table.sessionId, table.authenticationMethod),
    }
  },
)

export const sessionsInAuth = auth.table(
  'sessions',
  {
    id: uuid('id').primaryKey().notNull(),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersInAuth.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    factorId: uuid('factor_id'),
    aal: aalLevel('aal'),
    notAfter: timestamp('not_after', { withTimezone: true, mode: 'string' }),
    refreshedAt: timestamp('refreshed_at', { mode: 'string' }),
    userAgent: text('user_agent'),
    ip: inet('ip'),
    tag: text('tag'),
  },
  table => {
    return {
      notAfterIdx: index('sessions_not_after_idx').using(
        'btree',
        table.notAfter,
      ),
      userIdIdx: index('sessions_user_id_idx').using('btree', table.userId),
      userIdCreatedAtIdx: index('user_id_created_at_idx').using(
        'btree',
        table.userId,
        table.createdAt,
      ),
    }
  },
)

export const oneTimeTokensInAuth = auth.table(
  'one_time_tokens',
  {
    id: uuid('id').primaryKey().notNull(),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersInAuth.id, { onDelete: 'cascade' }),
    tokenType: oneTimeTokenType('token_type').notNull(),
    tokenHash: text('token_hash').notNull(),
    relatesTo: text('relates_to').notNull(),
    createdAt: timestamp('created_at', { mode: 'string' })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .defaultNow()
      .notNull(),
  },
  table => {
    return {
      relatesToHashIdx: index('one_time_tokens_relates_to_hash_idx').using(
        'hash',
        table.relatesTo,
      ),
      tokenHashHashIdx: index('one_time_tokens_token_hash_hash_idx').using(
        'hash',
        table.tokenHash,
      ),
      userIdTokenTypeKey: uniqueIndex(
        'one_time_tokens_user_id_token_type_key',
      ).using('btree', table.userId, table.tokenType),
    }
  },
)

export const samlRelayStatesInAuth = auth.table(
  'saml_relay_states',
  {
    id: uuid('id').primaryKey().notNull(),
    ssoProviderId: uuid('sso_provider_id')
      .notNull()
      .references(() => ssoProvidersInAuth.id, { onDelete: 'cascade' }),
    requestId: text('request_id').notNull(),
    forEmail: text('for_email'),
    redirectTo: text('redirect_to'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    flowStateId: uuid('flow_state_id').references(() => flowStateInAuth.id, {
      onDelete: 'cascade',
    }),
  },
  table => {
    return {
      createdAtIdx: index('saml_relay_states_created_at_idx').using(
        'btree',
        table.createdAt,
      ),
      forEmailIdx: index('saml_relay_states_for_email_idx').using(
        'btree',
        table.forEmail,
      ),
      ssoProviderIdIdx: index('saml_relay_states_sso_provider_id_idx').using(
        'btree',
        table.ssoProviderId,
      ),
    }
  },
)

export const ssoProvidersInAuth = auth.table(
  'sso_providers',
  {
    id: uuid('id').primaryKey().notNull(),
    resourceId: text('resource_id'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
  },
  table => {
    return {
      resourceIdIdx: uniqueIndex('sso_providers_resource_id_idx').using(
        'btree',
        sql`lower(resource_id)`,
      ),
    }
  },
)

export const ssoDomainsInAuth = auth.table(
  'sso_domains',
  {
    id: uuid('id').primaryKey().notNull(),
    ssoProviderId: uuid('sso_provider_id')
      .notNull()
      .references(() => ssoProvidersInAuth.id, { onDelete: 'cascade' }),
    domain: text('domain').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
  },
  table => {
    return {
      domainIdx: uniqueIndex('sso_domains_domain_idx').using(
        'btree',
        sql`lower(domain)`,
      ),
      ssoProviderIdIdx: index('sso_domains_sso_provider_id_idx').using(
        'btree',
        table.ssoProviderId,
      ),
    }
  },
)

export const samlProvidersInAuth = auth.table(
  'saml_providers',
  {
    id: uuid('id').primaryKey().notNull(),
    ssoProviderId: uuid('sso_provider_id')
      .notNull()
      .references(() => ssoProvidersInAuth.id, { onDelete: 'cascade' }),
    entityId: text('entity_id').notNull(),
    metadataXml: text('metadata_xml').notNull(),
    metadataUrl: text('metadata_url'),
    attributeMapping: jsonb('attribute_mapping'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    nameIdFormat: text('name_id_format'),
  },
  table => {
    return {
      ssoProviderIdIdx: index('saml_providers_sso_provider_id_idx').using(
        'btree',
        table.ssoProviderId,
      ),
      samlProvidersEntityIdKey: unique('saml_providers_entity_id_key').on(
        table.entityId,
      ),
    }
  },
)

export const flowStateInAuth = auth.table(
  'flow_state',
  {
    id: uuid('id').primaryKey().notNull(),
    userId: uuid('user_id'),
    authCode: text('auth_code').notNull(),
    codeChallengeMethod: codeChallengeMethod('code_challenge_method').notNull(),
    codeChallenge: text('code_challenge').notNull(),
    providerType: text('provider_type').notNull(),
    providerAccessToken: text('provider_access_token'),
    providerRefreshToken: text('provider_refresh_token'),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
    updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }),
    authenticationMethod: text('authentication_method').notNull(),
    authCodeIssuedAt: timestamp('auth_code_issued_at', {
      withTimezone: true,
      mode: 'string',
    }),
  },
  table => {
    return {
      createdAtIdx: index('flow_state_created_at_idx').using(
        'btree',
        table.createdAt,
      ),
      idxAuthCode: index('idx_auth_code').using('btree', table.authCode),
      idxUserIdAuthMethod: index('idx_user_id_auth_method').using(
        'btree',
        table.userId,
        table.authenticationMethod,
      ),
    }
  },
)
