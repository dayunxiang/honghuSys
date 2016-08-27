package mcgradytien.test;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

//import com.google.gson.*;

public class GetDataFromSQL {
	
	public static String getData() throws SQLException{
		String str = null;
		//初始化mysql链接
		Connection conn = ConnectMySQL.getConnection();
		try{
			String sql = "SELECT * FROM userinfo";
			
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			
			// 获取到了ResultSet;
			//if(rs.next()){
			//	System.out.println("ok");
			//}
			// 对ResultSet的处理
			// 封装成为Json，发送到前段，
			Gson gson = new Gson();
			List<UserInfo> usersinfo = new ArrayList<UserInfo>();
			rs.first();// 确保游标指针在记录一
			// rs.isAfterLast() 判断指针是否到达文件末尾
			// rs.next(),一次便利Resultset 结果集，将数据结果存储到user对象中
			// 最后依次存储到Arraylist中，使用gson.tojson(),方法转变为json数据
			while(!rs.isAfterLast()){
				UserInfo user = new UserInfo();
				user.setName(rs.getString("name"));
				user.setEmail(rs.getString("email"));
				user.setPassword(rs.getString("password"));
				usersinfo.add(user);
				rs.next();
			}
			str = gson.toJson(usersinfo);
			
			System.out.println(str);
			
		}catch(SQLException e){
			//TODO:handler exception
			e.printStackTrace();
		}finally{
			if(conn != null){
				try{
					conn.close();
				}catch(Exception e){
					e.printStackTrace();
				}
			}
		}
		return str;
		
	}
	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		try{
			String json = getData();
			System.out.println(json);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}