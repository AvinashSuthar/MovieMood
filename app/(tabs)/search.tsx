import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import SearchBar from '@/components/SearchBar'
import MovieCard from '@/components/MovieCard'

const search = () => {
    const [query, setQuery] = useState("");
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        refetch: refetchMovies,
        reset: resetMovies,
    } = useFetch(() => fetchMovies({ query }), false);

    const handleSearch = (text: string) => {
        setQuery(text);
    }

    useEffect(() => {
        const intervalId = setTimeout(() => {
            const fetchMovies = async () => {
                if (query.length > 0) {
                    await refetchMovies();
                } else {
                    resetMovies();
                }
            }
            fetchMovies();

        }, 500);
        return () => clearTimeout(intervalId)

    }, [query]);

    return (
        <View className='bg-primary flex-1 '>
            <Image source={images.bg} className='absolute w-full z-0' />

            <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto' />


            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MovieCard movieData={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10,
                }}
                contentContainerStyle={{
                    paddingBottom: 100,
                    paddingHorizontal: 20,

                }}
                className="mt-2 pb-32"
                ListHeaderComponent={
                    <>

                        <SearchBar
                            autoFocus={true}
                            onChange={handleSearch}
                            value={query}
                            placeholder="Search for a movie"
                        />
                        {
                            (query.length > 0) && (
                                <Text className="text-lg text-white font-bold mt-5 mb-3">
                                    Search Results for "{query}"
                                </Text>
                            )
                        }

                        {
                            moviesLoading && (
                                <ActivityIndicator
                                    size="large"
                                    color="#0000ff"
                                    className="mt-10 self-center"
                                />)
                        }
                        {
                            moviesError && (
                                <Text className='text-red-500'>Error: {moviesError?.message}</Text>
                            )
                        }
                        {
                            !moviesLoading && !moviesError && movies?.length === 0 && (
                                <Text className='text-gray-500 text-center mt-5'>No results found for "{query}"</Text>
                            )
                        }

                    </>
                }


                ListHeaderComponentStyle={{
                    marginTop: 10,
                }}
                ListEmptyComponent={

                    query.length <= 0 && !moviesLoading && !moviesError ?
                        (
                            <Text className='text-gray-500 font-semibold text-center mt-5'>Search for a movie</Text>

                        )
                        : null



                }
            />


        </View >
    )
}

export default search