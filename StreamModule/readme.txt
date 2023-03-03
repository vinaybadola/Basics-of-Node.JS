                              Node.js Streams


STREAMS = are object that let you read data from a source or write data to a destination in 
continous fashion. In Node js there are four type of streams-

READABLE - Stream which is used for read operation.
WRITABLE - Stram which is used for write operation.
DUPLEX - Stream which can be used for both read and write operation.
TRANSFORM - A type of duplex stream where the output is computed based on input.


Each type of Stream is an EventEmitter instance and throws several events at different instances
of times. For example, some of the commonly used events are-

data - This event is fired when there is data is avaliable to read.
end - This event is fired when there is no more data to read.
error- This event is fired when there is any error receiving or writing data.
finish - This event is fired when all the data has been flushed to underlying system.

1
2
2
2
13
1
45
33
6
43
436
436
436
4
6

