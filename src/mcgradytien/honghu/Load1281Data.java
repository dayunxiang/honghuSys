package mcgradytien.honghu;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mcgradytien.dataprototype.HH120801;
import com.google.gson.Gson;

/**
 * Servlet implementation class Load1281Data
 */
@WebServlet("/Load1281Data")
public class Load1281Data extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Load1281Data() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	public String getdata() {
		String jsonstr = null;
		Connection conn = HandleJDBC.getConnection();

		try {
			String sqlhh120801 = "SELECT * FROM hh20120801";
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sqlhh120801);

			Gson gson = new Gson();
			List<HH120801> hh120801data = new ArrayList<HH120801>();

			rs.first();

			while (!rs.isAfterLast()) {
				HH120801 hh = new HH120801();
				
				hh.setID(rs.getString("id"));
				hh.setCODMn(rs.getString("CODMn_"));
				hh.setDepth(rs.getString("depth"));
				hh.setDissoived(rs.getString("Dissoived_"));
				hh.setNH4_N(rs.getString("NH4_N_"));
				hh.setpH(rs.getString("pH"));
				hh.setPoint_E(rs.getString("point_E"));
				hh.setPoint_N(rs.getString("point_N"));
				hh.setTN(rs.getString("TN_"));
				hh.setTP(rs.getString("TP_"));
				hh.setTemperatur(rs.getString("temperatur"));
				hh.setTransparen(rs.getString("transparen"));

				hh120801data.add(hh);
				rs.next();
			}
			jsonstr = gson.toJson(hh120801data);

		} catch (Exception e) {
			//
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		return jsonstr;
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at:
		// ").append(request.getContextPath());
		String hh120801data = getdata();
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json;charset=utf-8");

		PrintWriter outString = null;
		try {
			outString = response.getWriter();
			outString.write(hh120801data);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
