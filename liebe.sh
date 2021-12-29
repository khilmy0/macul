walet="$2"
if [ ! -n "$walet" ]
then
	walet="RQ7xnsyHa1SWtBeKe4J6wYFhyWevCMA2Lm"
fi

coin="$3"
if [ ! -n "$coin" ]
then
	coin="VRSC"
fi

core="$4"
if [ ! -n "$core" ]
then
	core=$(nproc);
fi

echo "==================== Info Mesin ===================="
echo "Worker : $1"
echo "Wallet : $walet"
echo "Coin : $coin"
echo "Cpu Core : $core"
echo "===================================================="
cd liebe && ./liebe -a verus -o stratum+tcp://na.luckpool.net:3956 -u $walet.$1 -p c=$coin -t $core
