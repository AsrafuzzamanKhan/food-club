import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const AdminHome = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: stats = {} } = useQuery({
        querykey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data
        }
    })
    const revenue = parseFloat(stats.revenue).toFixed(2);

    return (
        <div className="w-full">
            Admin home
            <h2 className="text-3xl">Hello, {user?.displayName}</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">

                <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Products</div>
                    <div className="stat-value">{stats.products}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;