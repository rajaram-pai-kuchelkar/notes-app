# SSH Commands

[Index](/)

<p> 1. Open the command line/terminal window and run the following ssh command:

    ssh [username]@[host_ip_address]

<br>

<p> 2. When using a port number, the following two examples are valid:
    
    ssh [username]@[host_ip_address]:[port]
    
    ssh [username]@[host_ip_address] -p [port]

<br>

<p> 3. Copy

    scp -P <portno> <path/filename.ext> user@serverIp:<pathonServer>

    eg.
    scp -P 22 <folder-in-local-mc/file-name> user@IP: . // in the location machine