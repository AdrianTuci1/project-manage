import './moneyBrr.scss';
import UserScroll from '@/components/userScroll/UserScroll';
import { Earnings } from '@/components/earnings/earnings';
import ProjectEarningsTable from '@/components/earningsTable/earningsTable';

function MoneyBrr() {
    return (
        <>
        <div className="page">
            <div className="lef">
                <UserScroll />
            </div>
            <div className="right">
                <div className="top">
                <Earnings />
                </div>
                <div className="bottom">
                    <div className="wrapper">
                    <ProjectEarningsTable />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MoneyBrr;
