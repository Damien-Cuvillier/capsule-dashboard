import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Commandes récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Jean Dupont</TableCell>
                  <TableCell>120 €</TableCell>
                  <TableCell><span className="text-green-600">Payé</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Claire Martin</TableCell>
                  <TableCell>85 €</TableCell>
                  <TableCell><span className="text-yellow-600">En attente</span></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="mr-2">Ajouter un produit</Button>
            <Button variant="outline">Gérer les clients</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
