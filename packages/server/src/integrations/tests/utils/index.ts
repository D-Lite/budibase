import { Datasource } from "@budibase/types"
import * as postgres from "./postgres"
import * as mongodb from "./mongodb"
import * as mysql from "./mysql"
import * as mssql from "./mssql"
import * as mariadb from "./mariadb"
import { StartedTestContainer } from "testcontainers"

jest.setTimeout(30000)

export interface DatabaseProvider {
  start(): Promise<StartedTestContainer>
  stop(): Promise<void>
  datasource(): Promise<Datasource>
}

export const databaseTestProviders = {
  postgres,
  mongodb,
  mysql,
  mssql,
  mariadb,
}
