import { UsersTable } from "../components/UsersTable";
import { Layout } from "../shared/Layout";

export function Users() {
  return (
    <Layout headerTitle="Usuários">
      <UsersTable />
    </Layout>
  );
}
