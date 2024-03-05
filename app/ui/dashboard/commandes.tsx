import { lusitana } from '@/app/ui/fonts';
import { Commandes } from '@/app/lib/definitions';
import Produits from '@/app/ui/dashboard/produits';

export default async function Commandes({
    commandes,
  }: {
    commandes: Commandes[];
  }) {
    return (
      <div className="flex w-full flex-col md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Commandes récent
        </h2>
        
        <div className="rounded-xl bg-gray-50 p-4">
            {commandes.map((commande) => (
                <div>
                    <p>{commande.id}</p>
                    <Produits produits={commande.produits} />
                </div>
            ))}
        </div>
      </div>
    );
  }