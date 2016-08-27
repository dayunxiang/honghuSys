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

import mcgradytien.dataprototype.UsersInfo;

import com.google.gson.Gson;

/**
 * Servlet implementation class LoadChartData
 */
@WebServlet("/LoadUserData")
public class LoadUserData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoadUserData() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    public  String getdata(){
    	String jsonstr = null;
    	Connection conn = HandleJDBC.getConnection();
    	
    	try {
			String sql ="SELECT * FROM userinfo";
			
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql); 

	    	Gson gson = new Gson();
			List<UsersInfo> userinfo = new ArrayList<UsersInfo>(); 
			
			rs.first();
			 
			while(!rs.isAfterLast()){
				UsersInfo u = new UsersInfo();
				u.setName(rs.getString("name"));
				u.setEmail(rs.getString("email"));
				u.setPassword(rs.getString("password"));
				userinfo.add(u);
				rs.next();
			}
			jsonstr = gson.toJson(userinfo);
			
		} catch (Exception e) {
			// TODO: handle exception
		}finally{
			if(conn != null){
				try{
					conn.close();
				}catch(Exception e){
					e.printStackTrace();
				}
			}
		}
		
    	return jsonstr;
    }
    
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		//
		String jsondata = getdata();
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json;charset=utf-8");
		
		PrintWriter outString = null;
		try {
			outString =response.getWriter();
			outString.write(jsondata);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
