import { Card } from '@/app/ui/dashboard/cards';
import Produits from '@/app/ui/dashboard/produits';
import Commmandes from '@/app/ui/dashboard/commandes';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { getProduits } from '@/app/lib/data';
import { getCommandes } from '@/app/lib/data';
 
export default async function Page() {
  const produits = await getProduits();
  const commandes = await getCommandes();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="mt-6">
        <Produits produits={produits}  />
        <Commmandes commandes={commandes}  />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}