import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Info, TrendingUp, Coins, Wallet } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import usdcLogo from "@/assets/usdc-logo.png";
const Earn = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [lockupMonths, setLockupMonths] = useState(3);
  const [stakeAmount, setStakeAmount] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const walletBalance = 50000;
  const rentTokenBalance = 125000;
  const baseAPY = 9.5; // General pool average APY
  const estimatedYield = Number(depositAmount) * (baseAPY / 100);
  const rentTokenBonus = Number(depositAmount) / 10000 * lockupMonths * 100;
  const apyBoost = Number(stakeAmount) / 10000 * 0.1;
  const rentTokenPrice = 0.15;

  // User's wallet data
  const totalBalance = 1026050;
  const totalYieldEarned = 24161;

  // Historical balance and yield data
  const balanceChartData = [{
    month: 'Apr',
    balance: 926050,
    yield: 0,
    positions: 310500
  }, {
    month: 'May',
    balance: 936750,
    yield: 3250,
    positions: 320750
  }, {
    month: 'Jun',
    balance: 948100,
    yield: 6850,
    positions: 332100
  }, {
    month: 'Jul',
    balance: 960500,
    yield: 10800,
    positions: 344500
  }, {
    month: 'Aug',
    balance: 974200,
    yield: 14900,
    positions: 358200
  }, {
    month: 'Sep',
    balance: 989100,
    yield: 18650,
    positions: 373100
  }, {
    month: 'Oct',
    balance: 1004500,
    yield: 21500,
    positions: 388500
  }, {
    month: 'Nov',
    balance: 1015300,
    yield: 23100,
    positions: 399300
  }, {
    month: 'Dec',
    balance: 1026050,
    yield: 24161,
    positions: 410500
  }];
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };
  const handlePercentage = (percent: number) => {
    const amount = (walletBalance * percent).toFixed(2);
    setDepositAmount(amount);
  };
  return <div className="space-y-8">
      {/* My Wallet Section */}
      <div className="space-y-4">
        <div className="pb-2">
          <h2 className="text-2xl font-bold">My Wallet</h2>
          <p className="text-sm text-muted-foreground">Your balance and yield overview</p>
        </div>
        <Card>
          <CardHeader className="pb-2">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Total Balance</div>
              <div className="text-3xl font-bold">${totalBalance.toLocaleString()}</div>
              <div className="text-sm text-success mt-1">
                +${totalYieldEarned.toLocaleString()} yield earned
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Total Positions</div>
              <div className="text-3xl font-bold">$410,500</div>
              <div className="text-sm text-muted-foreground mt-1">Across 3 active positions</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">$BORE Tokens</div>
              <div className="text-3xl font-bold">{rentTokenBalance.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                ≈ ${(rentTokenBalance * rentTokenPrice).toLocaleString()} USDC
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex gap-4 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(16,100%,58%)]" />
              <span className="text-muted-foreground">Balance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(8,85%,55%)]" />
              <span className="text-muted-foreground">Yield</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(25,95%,50%)]" />
              <span className="text-muted-foreground">Positions</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={balanceChartData}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(16, 100%, 58%)" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="hsl(16, 100%, 58%)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(8, 85%, 55%)" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="hsl(8, 85%, 55%)" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="positionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(25, 95%, 50%)" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="hsl(25, 95%, 50%)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={formatCurrency} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} />
              <Area type="monotone" dataKey="balance" stroke="hsl(16, 100%, 58%)" strokeWidth={3} fill="url(#balanceGradient)" />
              <Area type="monotone" dataKey="yield" stroke="hsl(8, 85%, 55%)" strokeWidth={3} fill="url(#yieldGradient)" />
              <Area type="monotone" dataKey="positions" stroke="hsl(25, 95%, 50%)" strokeWidth={3} fill="url(#positionsGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
        </Card>
      </div>

      {/* Deposit Funds Section */}
      <div className="space-y-4">
        <div className="pb-2">
          <h2 className="text-2xl font-bold">Deposit Funds</h2>
          
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {/* General Pool Information */}
            <Card>
              <CardHeader>
                <CardTitle>BORE.FI General Investment Pool</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Your funds will be deployed across our diversified portfolio of boring cashflowing businesses including SME loans, business acquisitions, and direct equity investments. All opportunities are vetted by BORE.FI's investment committee.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 bg-muted/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">9.5%</div>
                    <div className="text-xs text-muted-foreground mt-1">Average APY</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$3.2B</div>
                    <div className="text-xs text-muted-foreground mt-1">Total Pool Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">68%</div>
                    <div className="text-xs text-muted-foreground mt-1">Current Utilization</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <span className="text-muted-foreground">Funds used for SME loans, business acquisitions, and equity investments</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <span className="text-muted-foreground">All investments undergo thorough due diligence by BORE.FI Protocol</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                    <span className="text-muted-foreground">Monthly distributions paid directly to your wallet</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deposit Amount */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Deposit Amount
                  <img src={usdcLogo} alt="USDC" className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input type="number" value={depositAmount} onChange={e => setDepositAmount(e.target.value)} placeholder="0.00" className="text-2xl h-16 font-mono" />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">
                      Wallet Balance: ${walletBalance.toLocaleString()}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handlePercentage(0.5)}>
                        50%
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handlePercentage(1)}>
                        Max
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lockup Period */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Lockup Period
                  <Badge variant="secondary">{lockupMonths} months</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Slider value={[lockupMonths]} onValueChange={value => setLockupMonths(value[0])} min={1} max={12} step={1} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1 month</span>
                  <span>12 months</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Earn {rentTokenBonus.toFixed(0)} bonus $BORE tokens</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual APY</span>
                    <span className="text-xl font-bold text-success">{baseAPY}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Estimated Annual Yield</span>
                    <span className="text-xl font-bold">${estimatedYield.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Bonus $BORE Tokens</span>
                    <span className="text-xl font-bold text-primary">{rentTokenBonus.toFixed(0)}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90 rounded-full" size="lg">
                  Deposit Funds
                </Button>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>

      {/* Staking Section */}
      <div className="space-y-4">
        <div className="pb-2">
          <h2 className="text-2xl font-bold">Staking</h2>
          <p className="text-sm text-muted-foreground">Purchase and stake $BORE tokens to boost your APY</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
        {/* Purchase $BORE */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="w-5 h-5" />
              Purchase $BORE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Amount (USDC)</Label>
              <Input type="number" value={purchaseAmount} onChange={e => setPurchaseAmount(e.target.value)} placeholder="0.00" className="text-xl h-12 font-mono mt-2" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  Current Price: ${rentTokenPrice} per $BORE
                </span>
                <span className="text-sm font-medium">
                  ≈ {(Number(purchaseAmount) / rentTokenPrice).toFixed(0)} $BORE
                </span>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              Purchase $BORE Tokens
            </Button>
          </CardContent>
        </Card>

        {/* Stake $BORE */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Stake $BORE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Stake Amount</Label>
              <Input type="number" value={stakeAmount} onChange={e => setStakeAmount(e.target.value)} placeholder="0" className="text-xl h-12 font-mono mt-2" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  Available: {rentTokenBalance.toLocaleString()} $BORE
                </span>
                <Button variant="outline" size="sm" onClick={() => setStakeAmount(rentTokenBalance.toString())}>
                  Max
                </Button>
              </div>
            </div>
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">
                  +{apyBoost.toFixed(2)}% APY Boost
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                10,000 $BORE tokens = +0.1% APY bonus
              </p>
            </div>
            <Button className="w-full bg-gradient-to-r from-[hsl(16,100%,58%)] to-[hsl(8,85%,55%)] text-white hover:opacity-90 rounded-full">
              Stake $BORE Tokens
            </Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Earn;