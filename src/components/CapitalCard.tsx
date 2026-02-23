import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const CapitalCard = () => {
  return <Card className="p-6 mb-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg">
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <div>
            <h1 className="text-4xl font-bold mb-2">$1,026,050</h1>
            <p className="text-lg opacity-90">Funds Available for Use</p>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-end gap-2 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-2xl font-bold">12.0%</span>
            </div>
            <p className="text-xs opacity-80">Average APY</p>
          </div>
        </div>
      </div>
    </Card>;
};
export default CapitalCard;
