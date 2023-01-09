This webapp is vulnerable to SSTI as user input is directly concatenated into a string which is subsequently rendered. This gives the user the opportunity to inject arbitrary javascript which will be rendered on the client side.

The vulnerable code is
