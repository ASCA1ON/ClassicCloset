import {format} from 'date-fns'
import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";


const BillboardsPage = async ({
    params
  }: {
    params: { storeId: string }
  }) => {
    const billboards = await prismadb.billboard.findMany({
      where: {
        storeId: params.storeId
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });
  
    const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
      id: item.id,
      label: item.label,
      updatedAt: format(item.updatedAt, 'do MMMM, yyyy'),
    }));
    const logger =(data:any)=>{console.log(data)}
  
    return (
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BillboardClient data={formattedBillboards} />
          {/* <button onClick={logger(formattedBillboards)}>log</button> */}
        </div>
      </div>
    );
  };
  
  export default BillboardsPage;