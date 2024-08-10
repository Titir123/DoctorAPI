export const endPoints = {
    auth:{
        signIn: "login",
        signUp: "/register"
    },
    cms:{
        list:"/alldoctordepartment",
        dashboard:"/userdash",
        create:"/createcontact",
        details:"/doctordetails",
        appointment:"/createappointment",
        department:"/alldepartment",
        docbydept:"/departmentidwisedoctor",
        featured:"/featured",
        personal:"/personalcare",
        childcare:"/childcare",
        blog:"/allblog",
        blogDetail:"/singleblog",
        recentBlog:"/recentblog",
        search:"/blogsearch",
        comment:"/getblogcomment",
        createcomment:"/createblogcomment",
    }
};

export const endPointsPath =[
    endPoints.auth.signIn, endPoints.auth.signUp, 
    endPoints.cms.list, endPoints.cms.dashboard, 
    endPoints.cms.create, endPoints.cms.details,
    
]